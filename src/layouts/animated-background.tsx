
import  styles from '../style.css'

interface CustomCSSProperties extends React.CSSProperties {
  [key: string]: string | number | undefined;
}
function Background(){
    return(
        <>
         <div className={styles['container-star']}>
      <div className={styles['stars']}>
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className={styles['stars']}
            style={{
              '--top-offset': `${Math.random() * 130}vh`,
              '--fall-duration': `${Math.random() * 10 + 5}s`,
              '--fall-delay': `${Math.random() * 10}s`,
            } as CustomCSSProperties} 
          ></div>
        ))}
      </div>

  
  </div>
        </>
    )
}

export default Background