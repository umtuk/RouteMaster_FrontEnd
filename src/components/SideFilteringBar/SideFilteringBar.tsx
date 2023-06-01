import styles from './SideFilteringBar.module.css';

function SideFilteringBar(): JSX.Element {
  return (
    <div className={styles.body}>
      <div className={styles.box}>
        <h3> 가격별 </h3>
        <input type="range" min="0" max="100" value="50" />
      </div>
      <div className={styles.box}>
        <h3> 거리별 </h3>
        <input type="range" min="0" max="100" value="50" />
      </div>
      <div className={styles.box}>
        <h3> 등급별 </h3>
        <div>
          <input type="checkbox" name="5star" className={styles.checkbox}/>
          <label htmlFor="5star">5성</label>
        </div>
        <div>
          <input type="checkbox" name="4star" value="4" />
          <label htmlFor="4star">4성</label>
        </div>
        <div>
          <input type="checkbox" name="3star" value="3" />
          <label htmlFor="3star">3성</label>
        </div>
      </div>
      <div className={styles.box}>
        <h3> 타입별 </h3>
        <div>
          <input type="checkbox" name="5star" className={styles.checkbox}/>
          <span>호텔</span>
        </div>
        <div>
          <input type="checkbox" name="4star" value="4" />
          <span>모텔</span>
        </div>
        <div>
          <input type="checkbox" name="3star" value="3" />
          <span>한옥</span>
        </div>
      </div>
    </div>
  );
}

export default SideFilteringBar;
