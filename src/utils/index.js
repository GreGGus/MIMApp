/**
 * Created by Gohma on 05/06/2017.
 */
export const getRandomColor = () => "#" + ("000000" + Math.floor(Math.random() * 0xFFFFFF).toString(16)).substr(-6);

