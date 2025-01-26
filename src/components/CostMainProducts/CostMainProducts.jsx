import { useState } from 'react';
import css from './CostMainProducts.module.css';
import clsx from 'clsx';

export default function CostMainProducts({ currentInfoAboutProduct, bundle, bundleTwo }) {
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

  return (
    <div
      className={clsx(
        css.costBlockProduct,
        bundle ? css.costBlockProductBundle : css.costBlockProduct,
        bundleTwo ? css.costBlockProductBundleTwo : css.costBlockProduct,
      )}>
      <div className={css.costProductImageAndNotification}>
        <img
          className={clsx(
            css.costProductImage,
            bundle ? css.costBlockProductBundleImage : css.costProductImage,
          )}
          src={currentInfoAboutProduct.productCourseImages}
          alt={`${currentInfoAboutProduct.productCourseName} image`}
        />
        <h5
          className={clsx(
            css.costProductNotificationText,
            bundle ? css.costBlockProductBundleNotificationText : css.costProductNotificationText,
          )}>
          {currentInfoAboutProduct.productCourseNotification
            ? currentInfoAboutProduct.productCourseNotification.split(' ').map((word, index) =>
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
      <div
        className={clsx(
          css.costProductCategoryAndSpeakers,
          bundle
            ? css.costBlockProductBundleCategoryAndSpeakers
            : css.costProductCategoryAndSpeakers,
        )}>
        <div>
          <p
            className={clsx(
              css.costProductCategoryText,
              currentInfoAboutProduct.productCourseCategory === 'MasterClass'
                ? css.costProductCategoryTextMasterClass
                : css.costProductCategoryText,
              bundle ? css.costBlockProductBundleCategoryText : css.costProductCategoryText,
            )}>
            {currentInfoAboutProduct.productCourseCategory}
          </p>
        </div>
        <div
          className={clsx(
            css.costProductSpeakersAndBy,
            bundle ? css.costBlockProductBundleSpeakersAndBy : css.costProductSpeakersAndBy,
          )}>
          <div>
            <p
              className={clsx(
                css.costProductSpeakersText,
                bundle ? css.costBlockProductBundleSpeakersText : css.costProductSpeakersText,
              )}>
              by:
            </p>
          </div>
          <div
            className={clsx(
              css.costProductSpeakers,
              currentInfoAboutProduct.productCourseSpeakers.length <= 1
                ? css.costProductSpeakersPaddBottom
                : css.costProductSpeakers,
            )}>
            {currentInfoAboutProduct.productCourseSpeakers.map((name, index) => (
              <p
                className={clsx(
                  css.costProductSpeakersText,
                  bundle ? css.costBlockProductBundleSpeakersText : css.costProductSpeakersText,
                )}
                key={index}>
                {name}
              </p>
            ))}
          </div>
        </div>
      </div>
      <h3
        className={clsx(
          css.costProductNameCourse,
          bundle ? css.costBlockProductBundleNameCourse : css.costProductNameCourse,
        )}>
        {currentInfoAboutProduct.productCourseName}
      </h3>
      <h4
        className={clsx(
          css.costProductVersionCourse,
          bundle ? css.costBlockProductBundleVersionCourse : css.costProductVersionCourse,
        )}>
        {currentInfoAboutProduct.productCourseVersion}
      </h4>
      <div
        className={clsx(
          css.costProductVideosStudentsTimesBlock,
          bundle
            ? css.costBlockProductBundleVideosStudentsTimesBlock
            : css.costProductVideosStudentsTimesBlock,
        )}>
        <div className={css.costProductVideosStudentsBlock}>
          <p
            className={clsx(
              css.costProductVideosStudentsTimesTextNums,
              bundle
                ? css.costBlockProductBundleVideosStudentsTimesTextNums
                : css.costProductVideosStudentsTimesTextNums,
            )}>
            {currentInfoAboutProduct.productCourseAmountVideos}
          </p>
          <p
            className={clsx(
              css.costProductVideosStudentsTimesText,
              bundle
                ? css.costBlockProductBundleVideosStudentsTimesText
                : css.costProductVideosStudentsTimesText,
            )}>
            Videos
          </p>
        </div>
        <div>
          <p
            className={clsx(
              css.costProductVideosStudentsTimesTextNums,
              bundle
                ? css.costBlockProductBundleVideosStudentsTimesTextNums
                : css.costProductVideosStudentsTimesTextNums,
            )}>
            {currentInfoAboutProduct.productCourseAmountStudents}
          </p>
          <p
            className={clsx(
              css.costProductVideosStudentsTimesText,
              bundle
                ? css.costBlockProductBundleVideosStudentsTimesText
                : css.costProductVideosStudentsTimesText,
            )}>
            Students
          </p>
        </div>
        <div className={css.costProductTimesBlock}>
          <p
            className={clsx(
              css.costProductVideosStudentsTimesTextNums,
              bundle
                ? css.costBlockProductBundleVideosStudentsTimesTextNums
                : css.costProductVideosStudentsTimesTextNums,
            )}>
            {currentInfoAboutProduct.productCourseAmountTimes}
          </p>
          <p
            className={clsx(
              css.costProductVideosStudentsTimesText,
              bundle
                ? css.costBlockProductBundleVideosStudentsTimesText
                : css.costProductVideosStudentsTimesText,
            )}>
            Time
          </p>
        </div>
      </div>
      <div
        className={
          (css.costProductButtons,
          clsx(bundle ? css.costProductButtonsNone : css.costProductButtons))
        }>
        <a
          className={css.costProductButtonInfo}
          onClick={() => toggleList(currentInfoAboutProduct.id)}>
          More info
        </a>
        <a className={css.costProductButtonBuy} href={currentInfoAboutProduct.productCourseBuyNow}>
          Buy Now
        </a>
      </div>
      <div
        className={`${css.costProductMoreInfoBlock} ${
          openLists.includes(currentInfoAboutProduct.id) ? css.open : ''
        }`}>
        <ul
          className={clsx(
            css.costProductMoreInfoList,
            currentInfoAboutProduct.productCourseMoreInfo.length === 0
              ? css.costProductMoreInfoListNoneMarg
              : '',
          )}>
          {currentInfoAboutProduct.productCourseMoreInfo.map((moreInfo, index) => (
            <li key={index}>{moreInfo}</li>
          ))}
        </ul>
      </div>
      <div
        className={clsx(
          css.costProductDiscount,
          bundle ? css.costBlockProductBundleDiscount : css.costProductDiscount,
        )}>
        <img src={currentInfoAboutProduct.productCourseDiscounts} alt={`Discount`} />
      </div>
      {bundle ? (
        <div
          className={clsx(
            css.costProductDiscount,
            bundle ? css.costBlockProductBundleDiscount : null,
          )}>
          <img src={currentInfoAboutProduct.productCourseDiscountsBundle} alt={`DiscountBundle`} />
        </div>
      ) : null}
      {bundleTwo ? (
        <div
          className={clsx(
            css.costProductDiscount,
            bundle ? css.costBlockProductBundleDiscount : null,
          )}>
          <img
            src={currentInfoAboutProduct.productCourseDiscountsBundleTwo}
            alt={`DiscountBundleTwo`}
          />
        </div>
      ) : null}
    </div>
  );
}
