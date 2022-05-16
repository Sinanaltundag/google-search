import React, { useEffect } from 'react'
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';
import { useResultContext } from '../contexts/Context'
import Loading from "./Loading"

const Results = () => {
const { results, getResults, isLoading, searchQuery }= useResultContext();
const location = useLocation()
useEffect(() => {
  if (searchQuery !== "") {
      if (location.pathname === "/video") {
        getResults(`/video/q=${searchQuery} videos`);
      // } else if (location.pathname === "/news") {
      //   getResults(`/search/q=${searchQuery}&num=20&tbm=nws`);  // rapid api solution not working
      } else {
        getResults(`${location.pathname}/q=${searchQuery}&num=20`);

      }
    }
  }, [searchQuery, location.pathname]);

console.log(results)

if (isLoading) return <Loading />

switch (location.pathname) {
  case "/search":
    return (
      <div className="flex flex-wrap justify-between items-center space-y-6 sm:px-20">
{results?.map(({link, title}, index)=>(
<div key={index} className="md:w-2/5 w-full">
<a href={link} target="_blank" rel="noreferrer">
  <p className="text-sm">
    {link.length > 30 ? link.substring(0,30): link}
  </p>
  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700" >
{title}
  </p>
</a>

</div>
))}

      </div>
    )
    case "/image":
    return (
      <div className="flex flex-wrap justify-center items-center">
{results?.map(({image, link:{href, title}},index)=>(
<a href={href} className="sm:p-3 p-5" key={index} target="_blank" rel="noopener noreferrer">
<img src={image?.src} alt={title} loading="lazy"/>
<p className="w-36 break-words text-sm mt-2">
  {title}
</p>
</a>
))}
      </div>
    )
    case "/news":
      return (
        <div className="sm:px-20 flex flex-wrap justify-between items-center space-y-6">
          {results?.map(({ id, links, source, title }, index) => (
            <div key={index} className="md:w-2/5 w-full ">
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noreferrer "
                className="hover:underline "
              >
                <p className="text-lg dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <div className="flex gap-4">
                <a
                  href={source?.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline hover:text-blue-300"
                >
                  {" "}
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );

    case "/video":
    return (
      <div className="flex flex-wrap">
      {console.log(results)}
{results.map((video, index)=>(
  <div key={index} className="p-2">
{video?.link&&<ReactPlayer url={video.link} controls width="355px" height="200px" />}
  </div>
))}
      </div>
    )

  default:
    break;
}  
}

export default Results