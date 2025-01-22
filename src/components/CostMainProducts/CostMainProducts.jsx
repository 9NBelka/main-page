import css from './CostMainProducts.module.css';

export default function CostMainProducts({ infoAboutProduct }) {
  return (
    <div>
      {infoAboutProduct.map((product) => (
        <div key={product.id} className={css.costBlockProducts}>
          {product.productCourse.map((itemsProduct) => (
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
                  <p className={css.costProductCategoryText}>
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
              <div className={css.costProductDiscount}>
                <img src={itemsProduct.productCourseDiscounts} alt={`Discount`} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
