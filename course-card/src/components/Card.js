import React from 'react'
import { FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler (){
        //logic
        if(likedCourses.includes(course.id)){
            //pehle se like pada hua h
            setLikedCourses ((prev) => prev.filter( (cid) =>(cid !== course.id) ));
            toast.warning("like removed");
        }
        else{
            //pehle se like nhi he ye course
            //insert karna h ye course liked courses me
            if (likedCourses.length === 0) {
                setLikedCourses( [course.id]);
            } else {
                //non-empty pehle se
                setLikedCourses ((prev) =>[...prev, course.id]);
            }
            toast.success("liked Successfully");

        }
    }
  return (
    <div className='bg-slate-800 bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
      
       <div className='relative '>
           <img src={course.image.url} alt='course'></img>

           <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
             <button onClick={clickHandler}>
                 {
                    !likedCourses.includes(course.id) ?
                     (<FcLikePlaceholder fontSize="1.75rem" />) :
                     (<FcLike fontSize="1.75rem" />)
                 }
             </button>
           </div>

       </div>

       <div>
        <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>
            {
                course.description.length >100 ?
                (course.description.substr(0,100)) + "..." :
                (course.description)
            }
        </p>
       </div>
    </div>
  )
}

export default Card
