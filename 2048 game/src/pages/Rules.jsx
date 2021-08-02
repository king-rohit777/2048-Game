import React from 'react'
import '../styles/Rules.css'
const Rules = () => {
    return (
        <div className="rules-container">
            <h1 className="first">The Game of 2048</h1>
            <p>2048 is a game where you combine numbered tiles in order to gain a higher numbered tile. In this game you start with two tiles, the lowest possible number available is two. Then you will play by combining the tiles with the same number to have a tile with the sum of the number on the two tiles. A lot of strategies have been devised in order to obtain the 2048 and be a winner in this game. But others have strived for a greater height. Which is a score beyond 2048. After, achieving the tile with a 2048 tile, players will be asked if you still want to continue the game. Some stop there, but others are determined to continue.</p>
            <p>The game of 2048 does not include complicated controls. The controls you’ll be using are just upward, downward, and sideways. The rules are also simple. You just need to move the tiles and every time you move one, another tile pops up in a random manner anywhere in the box. When two tiles with the same number on them collide with one another as you move them, they will merge into one tile with the sum of the numbers written on them initially.</p>
            <p>This game is a good pastime. A lot of people play this game in their free time.. Some people play it to compete with their friends, while other people play 2048 as one of their hobbies.</p>
            <p>There are a lot of applications from the playstore that offer the 2048 game. Each application comes with its own variation of the game. Some make the space bigger, the classic game comes with a 4x4 box, while other versions go with 5x5 or 8x8 boxes. Others make the game a lot different by making it circular and some lets you play with multiple boxes. You can browse the internet for different versions of 2048 in order to find the game of your choice.</p>

            <h1>Playing 2048</h1>
            <ol>
                <li>Start by pushing the tiles to one corner of the square. Placing tiles together in one corner gives you a higher chance to move tiles with the same number closer together. You can use one of the four corners of the box, top left, top right, bottom left, and bottom right. The square at the edge of the corner you chose should contain the highest number so it won’t get in your way while you combine other tiles.</li>
                <li>Never place tiles with high numbers in the center of the box. Doing so will make it harder for you to combine other tiles because your tile with a higher number on it will block other tiles with lower numbers that are appearing.</li>
                <li>Start with the tiles with small numbers on them. Let the tiles with high numbers on them stay in one corner while you are combining the tiles with smaller numbers. Then the score will increase as time passes by.</li>
                <li>Use the boxes that are seen beside the corner you are using to keep the tile with the highest number in order to make it easier to combine them together.</li>
                <li>Don’t rush in combining tiles with high values. This might scatter the tiles you are keeping aside and make it harder to combine a lot of tiles. Keep combining squares with small values until you reach your goal.</li>
                <li>Practice a lot. Experience is one of the greatest mentors one can have. Playing the game a lot will give you a lot of practice and it will allow you to develop different strategies for how to achieve high scores. Be patient and let your experience take you to greater achievements in game</li>
            </ol>

            <img src="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_301/MTc0NDU1NTAxOTY5NzYxNjQw/how-to-play-2048.webp" alt="2048pic" srcset="" />

            <p>If you're playing 2048 to compete with your friends, I suggest that you target numbers higher than 2048. Yes, it is possible that you could end up with a number higher than 2048 in this game. Play until you can finally beat your friends' high scores. Enjoy the game and have fun!</p>

            <img src="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_479/MTc0NDU1NTAxOTY5ODI3MTc2/how-to-play-2048.webp" alt="2048pic" srcset="" />
        </div>
    )
}

export default Rules
