import {
  useGetBoundariesQuery,
  useGetSkeletonQuery,
  usePrefetchDataDashboard,
} from '@/services/dataDashboard';
// import { useGetSkeletonQuery, usePrefetchDataDashboard } from '@/services/dataDashboard';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setShowSideNav } from '@/stores/uiSlice';
import { useOnScreen } from '@/utils/customHooks';
import { classNames } from '@/utils/helper';
import { SkeletonSection } from '@hraadvisors/report-api-types';
import { Select, SelectItem } from '@mantine/core';
import _ from 'lodash';
import { Fragment, useEffect, useRef, useState } from 'react';
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';
import { Link, matchPath, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { navbarLinks } from './Navbar';

const ScrollLinkWrapper = ({ section }: { section: SkeletonSection; isSubNav?: boolean }) => {
  const refScrollLink = useRef<HTMLLIElement>(null);
  const [isDirectionUp, setIsDirectionUp] = useState(true);

  const checkScrollDirectionIsUp = (event: WheelEvent) => {
    return setIsDirectionUp(event.deltaY < 0);
  };

  useEffect(() => {
    const dashboardMain = window.document.getElementById('dashboardMain');
    if (dashboardMain) {
      dashboardMain.addEventListener('wheel', checkScrollDirectionIsUp);
      return () => {
        dashboardMain.removeEventListener('wheel', checkScrollDirectionIsUp);
      };
    }
  }, []);

  const isVisible = useOnScreen(refScrollLink);

  return (
    <li
      ref={refScrollLink}
      key={section.id}
      className={`pl-10 break-normal cursor-pointer text-xs`}
    >
      <ScrollLink
        to={`section${section.id}`}
        spy={true}
        smooth={true}
        offset={30}
        duration={500}
        className='inline text-gray-800'
        activeClass='font-bold'
        onSetActive={() => {
          if (!isVisible) {
            if (isDirectionUp) {
              refScrollLink.current?.scrollIntoView();
            } else {
              refScrollLink.current?.scrollIntoView(false);
            }
          }
        }}
      >
        {section.title}
      </ScrollLink>
    </li>
  );
};

const DataDashboardNav = ({
  className,
  isSubNav = false,
}: {
  className?: string;
  isSubNav?: boolean;
}) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const { data } = useGetSkeletonQuery({
    reportId: searchParams.get('reportId') ?? undefined,
    geoId: searchParams.get('geoId') ?? undefined,
  });

  const prefetchReport = usePrefetchDataDashboard('getReport');
  const { pageId } = useParams();
  const dispatch = useAppDispatch();

  const links = _.chain(data?.chapters)
    .groupBy('pageId')
    .mapValues((data) => ({
      first: _.first(data)!,
      chapters: data,
    }))
    .value();

  return (
    <ul className={className}>
      {_.map(links, (l, i) => (
        <li className='w-full' key={i}>
          <div className='w-full'>
            <Link
              className={classNames(
                _.isEqual(pageId, l.first?.pageId)
                  ? 'font-bold bg-gray-50'
                  : 'hover:bg-gray-100 text-gray-600 ',
                isSubNav ? 'pl-6 pr-2 text-sm' : ' px-4 text-md',
                'w-full  flex  items-center py-2',
              )}
              to={`/data-dashboards/${l.first.pageId}${location.search}`}
              onClick={() => dispatch(setShowSideNav(false))}
              onMouseEnter={() => {
                prefetchReport({
                  pick: _.map(l.chapters, (chapter) => chapter.id).join(','),
                });
              }}
            >
              {_.isEqual(pageId, l.first?.pageId) ? <AiOutlineDown /> : <AiOutlineRight />}
              <span className='ms-6'>{l.first.title}</span>
            </Link>
            {_.isEqual(pageId, l.first.pageId) && (
              <ul className='space-y-3 py-2 md:px-10 px-11 thin-scrollbar shadow-inner max-h-72 overflow-y-auto w-full'>
                {_.map(l.chapters, (chapter, j) => (
                  <Fragment key={j}>
                    {_.size(l.chapters) > 1 && (
                      <li
                        key={chapter.id}
                        className='pr-2 pl-4 text-gray-700 text-sm  hover:bg-gray-100'
                      >
                        {chapter.title}
                      </li>
                    )}
                    {_.map(chapter.sections, (section, i) => (
                      <ScrollLinkWrapper isSubNav={isSubNav} key={i} section={section} />
                    ))}
                  </Fragment>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

const SideNav = ({ showOnLarge = false }: { showOnLarge?: boolean }) => {
  const location = useLocation();
  const showSideNav = useAppSelector((store) => store.ui.showSideNav);
  const sideNavRef = useRef<HTMLElement>(null);
  const dispatch = useAppDispatch();
  const [_searchParams, setSearchParams] = useSearchParams();

  const handleClickOutside: EventListener = (event) => {
    if (sideNavRef.current && !sideNavRef.current?.contains(event.target as any)) {
      dispatch(setShowSideNav(false));
    }
  };

  const { data: boundaryData } = useGetBoundariesQuery();

  const boundaries = _.first(_.toArray(boundaryData?.boundaries));

  const geoIdSelectOptions: SelectItem[] = _(boundaries)
    .groupBy((b) => {
      const props = b.feature.properties as any;
      if (props.GEOID === props.STATEFP) {
        return 'State';
      } else if (props.GEOID === `${props.STATEFP}${props.COUNTYFP}`) {
        return 'County';
      } else if (props.GEOID === `${props.STATEFP}${props.COUNTYFP}${props.TRACTCE}`) {
        return 'Tract';
      }
      return 'Region';
    })
    .map((options, index) => ({
      group: index,
      items: _.map(options, (option) => ({
        value: (option.feature.properties as any).GEOID,
        label: (option.feature.properties as any).NAME,
      })),
    }))
    .value()
    .map((group) => group.items.map((item) => ({ ...item, group: group.group })))
    .flat();

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sideNavRef]);

  return (
    <aside
      ref={sideNavRef}
      className={classNames(
        'fixed inset-y-0 left-0 pt-16 z-40 w-[80vw] lg:bg-basic bg-gray-50 lg:w-80 xl:w-96  transition-transform ',
        showSideNav ? 'translate-x-0' : `-translate-x-full ${showOnLarge && 'lg:translate-x-0'}`,
      )}
      aria-label='Sidebar'
    >
      <div
        className={classNames(
          'h-full md:h-[90%] lg:mt-8 py-4 md:mb-10 overflow-y-auto lg:border-r lg:border-black',
        )}
      >
        {matchPath('/data-dashboards/*', location.pathname) && (
          <div className='w-full px-4 py-8 md:pt-0'>
            <div className='font-semibold text-sm py-2'>
              GEOGRAPHY<sup className='text-red-600'>*</sup>
            </div>
            <Select
              onChange={(geoId) => {
                setSearchParams((prev) => _.merge(Object.fromEntries(prev.entries()), { geoId }));
              }}
              placeholder='Texas'
              data={geoIdSelectOptions}
              searchable
            />
          </div>
        )}

        <ul className='lg:hidden'>
          {_.map(navbarLinks, (l, i) => (
            <li className='w-full' key={i}>
              <div className='w-full'>
                <Link
                  onClick={() => dispatch(setShowSideNav(false))}
                  className={classNames(
                    'w-full flex flex-row items-center text-md md:text-lg px-3 py-2',
                    matchPath(`${l.link}/*`, location.pathname)
                      ? 'font-bold bg-gray-50'
                      : 'hover:bg-gray-100 text-gray-700',
                  )}
                  to={`${l.link}`}
                >
                  {l.hasChildren ? (
                    <span className='w-4 text-center'>
                      {matchPath(`${l.link}/*`, location.pathname) ? (
                        <AiOutlineDown />
                      ) : (
                        <AiOutlineRight />
                      )}
                    </span>
                  ) : (
                    <div className='w-4'>&nbsp;&nbsp;</div>
                  )}

                  <span className='ml-4 text-base'>{l.text}</span>
                </Link>
                {_.isEqual(l.link, '/data-dashboards') &&
                  matchPath('/data-dashboards/*', location.pathname) && (
                    <DataDashboardNav isSubNav={true} className='w-full' />
                  )}
              </div>
            </li>
          ))}
        </ul>
        {showOnLarge && matchPath('/data-dashboards/*', location.pathname) && (
          <DataDashboardNav className='w-full hidden lg:block' />
        )}
      </div>
    </aside>
  );
};

export default SideNav;
