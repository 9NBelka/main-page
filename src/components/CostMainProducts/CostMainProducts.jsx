import { useState } from 'react';
import css from './CostMainProducts.module.css';
import clsx from 'clsx';

export default function CostMainProducts({ infoAboutProduct, currentInfoProduct }) {
  // Состояние для отслеживания открытых списков (хранит ID открытых элементов)
  const [openLists, setOpenLists] = useState([]);

  // Функция для переключения состояния
  const toggleList = (id) => {
    if (openLists.includes(id)) {
      // Если список уже открыт, удаляем его из массива
      setOpenLists(openLists.filter((openId) => openId !== id));
    } else {
      // Если список закрыт, добавляем его в массив
      setOpenLists([...openLists, id]);
    }
  };

  console.log(currentInfoProduct);

  return (
    <div>
      {/* {infoAboutProduct.map((product) => ( */}
      <div className={css.costBlockProducts}>
        {currentInfoProduct.productCourse.map((itemsProduct) => (
          <div key={itemsProduct.id} className={css.costBlockProduct}>
            <div className={css.costProductImageAndNotification}>
              <img
                className={css.costProductImage}
                src={itemsProduct.productCourseImages}
                alt={`${itemsProduct.productCourseName} image`}
              />
              <h5 className={css.costProductNotificationText}>
                {itemsProduct.productCourseNotification
                  ? itemsProduct.productCourseNotification.split(' ').map((word, index) =>
                      ['СРАЗУ', 'ЗРАЗУ'].includes(word) ? (
                        <span key={index} className={css.productCourseNotificationGreen}>
                          {word + ' '}
                        </span>
                      ) : (
                        <span key={index}>{word} </span>
                      ),
                    )
                  : null}
              </h5>
            </div>
            <div className={css.costProductCategoryAndSpeakers}>
              <div>
                <p
                  className={clsx(
                    css.costProductCategoryText,
                    itemsProduct.productCourseCategory === 'MasterClass'
                      ? css.costProductCategoryTextMasterClass
                      : css.costProductCategoryText,
                  )}>
                  {itemsProduct.productCourseCategory}
                </p>
              </div>
              <div className={css.costProductSpeakersAndBy}>
                <div>
                  <p className={css.costProductSpeakersText}>by:</p>
                </div>
                <div className={css.costProductSpeakers}>
                  {itemsProduct.productCourseSpeakers.map((name, index) => (
                    <p className={css.costProductSpeakersText} key={index}>
                      {name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <h3 className={css.costProductNameCourse}>{itemsProduct.productCourseName}</h3>
            <h4 className={css.costProductVersionCourse}>{itemsProduct.productCourseVersion}</h4>
            <div className={css.costProductVideosStudentsTimesBlock}>
              <div className={css.costProductVideosStudentsBlock}>
                <p className={css.costProductVideosStudentsTimesTextNums}>
                  {itemsProduct.productCourseAmountVideos}
                </p>
                <p className={css.costProductVideosStudentsTimesText}>Videos</p>
              </div>
              <div>
                <p className={css.costProductVideosStudentsTimesTextNums}>
                  {itemsProduct.productCourseAmountStudents}
                </p>
                <p className={css.costProductVideosStudentsTimesText}>Students</p>
              </div>
              <div className={css.costProductTimesBlock}>
                <p className={css.costProductVideosStudentsTimesTextNums}>
                  {itemsProduct.productCourseAmountTimes}
                </p>
                <p className={css.costProductVideosStudentsTimesText}>Time</p>
              </div>
            </div>
            <div className={css.costProductButtons}>
              <a className={css.costProductButtonInfo} onClick={() => toggleList(itemsProduct.id)}>
                More info
              </a>
              <a className={css.costProductButtonBuy} href={itemsProduct.productCourseBuyNow}>
                Buy Now
              </a>
            </div>
            {/* Список, который открывается независимо */}
            <div
              className={`${css.costProductMoreInfoBlock} ${
                openLists.includes(itemsProduct.id) ? css.open : ''
              }`}>
              <ul
                className={clsx(
                  css.costProductMoreInfoList,
                  itemsProduct.productCourseMoreInfo.length === 0
                    ? css.costProductMoreInfoListNoneMarg
                    : '',
                )}>
                {itemsProduct.productCourseMoreInfo.map((moreInfo, index) => (
                  <li key={index}>{moreInfo}</li>
                ))}
              </ul>
            </div>
            <div className={css.costProductDiscount}>
              <img src={itemsProduct.productCourseDiscounts} alt={`Discount`} />
            </div>
          </div>
        ))}
      </div>
      {/* ))} */}
    </div>
  );
}
