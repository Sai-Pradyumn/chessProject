import styles from './benefits.module.css'

const Benefits = () => {
    return(
        <div className={styles.benefits}>
            <div className={styles.benefitsdetails}>
                <h2>Benefits</h2>
                <p>
                    Chess, revered as the "game of kings," offers a wealth of intellectual stimulation and cognitive benefits. Players engage in a battle of wits, honing their strategic thinking, decision-making, and problem-solving skills with each move. Through careful analysis and foresight, participants learn to anticipate their opponent's actions while formulating their own masterful strategies, fostering a mindset of critical thinking and adaptability. 
                </p>
                <p>
                    Beyond its mental challenges, chess serves as a powerful tool for social interaction and personal growth. Whether played casually among friends or competitively in tournaments, chess encourages camaraderie, sportsmanship, and respect for opponents. It cultivates valuable life skills such as patience, perseverance, and resilience, instilling a sense of discipline and integrity that extends far beyond the chessboard.
                </p>
                <p>
                    Moreover, the benefits of chess extend beyond individual development to encompass broader societal impacts. Chess programs in schools and communities promote inclusivity, diversity, and equal opportunity, providing a platform for individuals from all backgrounds to come together and engage in a shared pursuit of excellence. As a universal language that transcends cultural and linguistic barriers, chess serves as a catalyst for positive social change and empowerment, fostering connections and bridging divides in an increasingly interconnected world.
                </p>
            </div>
            <div className={styles.image}>
                <img src="./benefits1.png" alt="" />
            </div>
        </div>
    )
}

export default Benefits