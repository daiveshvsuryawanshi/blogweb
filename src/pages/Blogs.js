import React,{useState} from "react";

import Bloger from './../api/Bloger'
import Markup from "./Blogpost/Markup";
import Programminglanguage from "./Blogpost/Programminglanguage";
import Scriptinglanguage from "./Blogpost/Scriptinglanguage";

// const array = [
//     { id: 1, component: <Programminglanguage/>, isVisible: true, 
//       info: [{ id: 5, component: <div>info1</div>, isVisibleInfo: false }] },

//     { id: 2, component: <Markup/>, isVisible: true, 
//       info: [{ id: 6, component: <div>info2</div>, isVisibleInfo: false }] },

//     { id: 3, component: <Scriptinglanguage/>, isVisible: true, 
//       info: [{ id: 7, component: <div>info3</div>, isVisibleInfo: false }] },

//     // { id: 4, component: <Comp4/>, isVisible: true, 
//     //   info: [{ id: 8, component: <div>info4</div>, isVisibleInfo: false }] }
//   ];

  
  export const Blogs = () => {

    const [items, setItems] = useState(Bloger);
  
    const handleClick = (number) => {
      const triggeredItems = items.map((item) => {
        if (item.id !== number) {
          item.isVisible = !item.isVisible;
        }
  
        return item;
      });
  
      setItems(triggeredItems);
    };

    const handleClickInner = (number) => {
      const triggeredItemsInner = items.info.map((item) => {
        if (item.id !== number) {
          item.isVisibleInfo = !item.isVisibleInfo;
        }
  
        return item;
      });
  
      setItems(triggeredItemsInner);
    };

  
    return (
      <div className="mt-1 pt-1 pb-3 px-3">
        <div className="row text-center d-flex my-1">
        {items.map(({ id, component, isVisible, info }) => (
          <div
            key={id}
            className="col-lg-3 col-md-6 mb-4 justify-content-center"
            onClick={() => handleClick(id)}
            hidden={!isVisible}
          >
            { Programminglanguage }

            {info.map(({ id, component, isVisibleInfo }) => (
            <div
              key={id}
              className="col-lg-9 col-md-6 mb-4 justify-content-center"
              onClick={() => { handleClickInner(id)}}
              hidden={isVisibleInfo}
            >
              { Scriptinglanguage }
              
            </div>
          ))}
          </div>
        ))}
        </div>
      </div>
    );
  };
  export default Blogs;