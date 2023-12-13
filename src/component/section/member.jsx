// import { Component, useState } from "react";
// import { Link } from "react-router-dom";

// const title = "Most Popular Members";
// const desc = "Learn from them and try to make it to this board. This will for sure boost you visibility and increase your chances to find you loved one.";
// const btnText = "See More Popular";

// let MemberDataList = [
    
// ]

// const MemberSection = () => {

//     const [items, setItems] = useState(MemberDataList);
//     const filterItem = (categItem) => {
//         const updateItems = MemberDataList.filter((curElem) => {
//             return curElem.catagory === categItem;
//         });
//         setItems(updateItems);
//     }
//     return (
//         <div className="member padding-top padding-bottom overflow-hidden">
//             <div className="container">
//                 <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
//                     <h2>{title}</h2>
//                     <p>{desc}</p>
//                 </div>
//                 <div className="section__wrapper wow fadeInUp" data-wow-duration="1.5s">
//                     <ul className="member__buttongroup filters-button-group w-100 d-flex flex-wrap justify-content-center">
//                         <li onClick={() => setItems(MemberDataList)} className="button filter-btn"><span className="member__radio"></span> View All <span className="banner__inputlist--icon"><i className="fa-solid fa-venus-mars"></i></span></li>
//                         <li onClick={() => filterItem('male')}  className="button filter-btn"><span className="member__radio"></span> Male <span className="banner__inputlist--icon"><i className="fa-solid fa-mars"></i></span></li>
//                         <li onClick={() => filterItem('female')}  className="button filter-btn"><span className="member__radio"></span> Female <span className="banner__inputlist--icon"><i className="fa-solid fa-venus"></i></span></li>
//                     </ul>

//                     <div className="member__grid d-flex flex-wrap justify-content-center mx-12-none">
//                         {
//                             items.map((elem) => {
//                             const { id, imgUrl, imgAlt, activity, name, age } = elem;
//                                 return (
//                                     <div className="member__item male" key={id}>
//                                         <div className="member__inner">
//                                             <div className="member__thumb">
//                                                 <img src={`${imgUrl}`} alt={`${imgAlt}`} />
//                                                 <span className="member__activity">{activity}</span>
//                                             </div>
//                                             <div className="member__content">
//                                                 <Link to="/member-single"><h5>{name}</h5></Link>
//                                                 <p>{age} <i className="fa-solid fa-mars"></i></p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )
//                             })
//                         }
//                     </div>
//                     <div className="text-center mt-4">
//                         <Link to="/members" className="default-btn"><span>{btnText}</span></Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
 
// export default MemberSection;