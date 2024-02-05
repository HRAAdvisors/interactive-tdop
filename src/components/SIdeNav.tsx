import { useGetSkeletonQuery } from '@/services/dataDashboard';
import _ from 'lodash';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const SideNav = () => {
  const { data } = useGetSkeletonQuery();

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
      id='default-sidebar'
      className='fixed top-16 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0'
      aria-label='Sidebar'
    >
      <div className='h-full py-4 overflow-y-auto border-r border-gray-100'>
        <ul className=''>
          {_.chain(links)
            .map((l, i) => (
              <li className='w-full' key={i}>
                <div className='w-full'>
                  <Link
                    className={`w-full block px-2 py-2  ${_.isEqual(pageId, l.first?.pageId) ? 'font-bold bg-amber-900 text-orange-50' : 'text-gray-600 hover:bg-gray-100'}`}
                    to={`/data-dashboards/${l.first.pageId}`}
                  >
                    <span className='ms-3'>{l.first.title}</span>
                  </Link>
                  {_.isEqual(pageId, l.first.pageId) && (
                    <ul className='space-y-3 py-2 px-4 w-full drop-shadow-sm'>
                      {_.chain(l.chapters)
                        .map((chapter, j) => (
                          <Fragment key={j}>
                            {_.size(l.chapters) > 1 && (
                              <li
                                key={chapter.id}
                                className='px-2 text-gray-900 cursor-pointer hover:bg-gray-100'
                              >
                                {chapter.title}
                              </li>
                            )}
                            {_.map(chapter.sections, (section) => (
                              <li key={section.id} className='pl-3  cursor-pointer text-xs'>
                                <ScrollLink
                                  to={`section${section.id}`}
                                  spy={true}
                                  smooth={true}
                                  offset={0}
                                  duration={500}
                                  className=' text-gray-900 hover:bg-gray-100'
                                  activeClass='font-bold'
                                >
                                  {section.title}
                                </ScrollLink>
                              </li>
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
