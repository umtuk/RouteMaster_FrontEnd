import styles from './Review.module.css';

function ReviewItem(): JSX.Element {
  return (
    <div className={styles.review_container}>
      <div className={styles.review_header}>
        <div>작성자: lhjin0j</div>
        <div>평점: 4.5/5.0</div>
      </div>
      <div>
        <div>본문</div>
        <div>: askjdfhshdfkhasshdssdhfkjahsdjfhjakshdfkahsjdffkahsdsf</div>
      </div>
    </div>
  );
}

function Review(): JSX.Element {
  return (
    <div className={styles.container}>
      <div>리뷰</div>
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </div>
  );
}

export default Review;
