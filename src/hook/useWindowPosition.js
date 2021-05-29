import { useLayoutEffect, useState } from 'react';

//returns the animate start event based on the scroll offset of the page
//sets the animation to true after scrolling a certain amount past a div
export default function useWindowPosition(projects){
    const [animations, setAnimations] = useState(new Array(projects.length).fill(false));
    const [lastUpdate, setLastUpdate] = useState(0);

    console.log(animations);
    useLayoutEffect(() => {
        function updatePosition(){
           var viewHeight = window.innerHeight;     //window size in pixels
           var currentPos = window.pageYOffset;     //current scroll position of the top left of the view in pixels
           var pageHeight = document.documentElement.scrollHeight;      //total height of the page

                //if 20vh or less of the page remains, load new card
            if( (pageHeight - (currentPos + viewHeight) <= 50) && Date.now() - lastUpdate > 100){
                const newArray = [...animations];
                for(var i = 0; i< newArray.length; i++){
                    if(newArray[i] === false){
                        newArray[i] = true;
                        setLastUpdate(Date.now());
                        setAnimations(newArray);
                        break;
                    }
                }

            }
            
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, [animations, lastUpdate]);
    return animations;
}

//need to update the animations array at index i when we have a small amount left of the page to scroll
//a percentage would not be the best because behavior would change based on the length of the page,
//a vh value would be best
//return the array to be used by each imagecard so it knows when to become visible



