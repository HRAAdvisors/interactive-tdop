import { useGetSkeletonQuery, usePrefetchDataDashboard } from '@/services/dataDashboard';
import _ from 'lodash';
import {
  Fragment,
  MouseEventHandler,
  RefObject,
  WheelEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { SkeletonSection } from '@hraadvisors/report-api-types';

function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () => new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting)),
    [ref],
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}

const ScrollLinkWrapper = ({ section }: { section: SkeletonSection }) => {
  const refScrollLink = useRef<HTMLLIElement>(null);
  const [isDirectionUp, setIsDirectionUp] = useState(true);

  const checkScrollDirectionIsUp: WheelEventHandler = (event) => {
    return setIsDirectionUp(event.deltaY < 0);
  };

  useEffect(() => {
    const dashboardMain = window.document.getElementById('dashboardMain');
    if (dashboardMain) {
      dashboardMain.addEventListener('wheel', checkScrollDirectionIsUp);
    }
  });

  const isVisible = useOnScreen(refScrollLink);

  return (
    <li ref={refScrollLink} key={section.id} className='pl-3 break-normal	 cursor-pointer text-xs'>
      <ScrollLink
        to={`section${section.id}`}
        spy={true}
        smooth={true}
        offset={30}
        duration={500}
        className='inline'
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

const SideNav = () => {
  const { data } = useGetSkeletonQuery();
  const prefetchReport = usePrefetchDataDashboard('getReport');
  const { pageId = 'home' } = useParams();

  const links = _.chain(data?.chapters)
    .groupBy('pageId')
    .mapValues((data) => ({
      first: _.first(data)!,
      chapters: data,
    }))
    .value();

  return (
    <aside
      className='fixed top-16 left-0 bg-white z-40 w-72 bottom-0 transition-transform -translate-x-full sm:translate-x-0'
      aria-label='Sidebar'
    >
      <div className='h-full py-4 overflow-y-auto border-r border-gray-100'>
        <ul className=''>
          {_.chain(links)
            .map((l, i) => (
              <li className='w-full' key={i}>
                <div className='w-full'>
                  <Link
                    className={`w-full block px-2 py-2 text-gray-600  ${_.isEqual(pageId, l.first?.pageId) ? 'font-semibold bg-gray-100' : 'hover:bg-gray-100'}`}
                    to={`/data-dashboards/${l.first.pageId}`}
                    onMouseEnter={() => {
                      prefetchReport({
                        pick: _.map(l.chapters, (chapter) => chapter.id).join(','),
                      });
                    }}
                  >
                    <span className='ms-3'>{l.first.title}</span>
                  </Link>
                  {_.isEqual(pageId, l.first.pageId) && (
                    <ul className='space-y-3 py-2 px-4 max-h-72 overflow-y-auto w-full drop-shadow'>
                      {_.chain(l.chapters)
                        .map((chapter, j) => (
                          <Fragment key={j}>
                            {_.size(l.chapters) > 1 && (
                              <li
                                key={chapter.id}
                                className='px-2 text-gray-700 cursor-pointer hover:bg-gray-100'
                              >
                                {chapter.title}
                              </li>
                            )}
                            {_.map(chapter.sections, (section, i) => (
                              <ScrollLinkWrapper key={i} section={section} />
                            ))}
                          </Fragment>
                        ))
                        .value()}
                    </ul>
                  )}
                </div>
              </li>
            ))
            .value()}
        </ul>
      </div>
    </aside>
  );
};

export default SideNav;
