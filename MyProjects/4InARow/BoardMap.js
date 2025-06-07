class BoardMap
{
    map;

    /**
     * pMap must be a row array of column arrays
     *
     */
    constructor(pMap)
    {
        //make duplicate of pMap
        let dupe = new Array(pMap.length);
        
        for(let row = 0; row < pMap.length; row++)
        {
            let columns = new Array(pMap[row].length);
            dupe[row] = columns;

            for(let column = 0; column < pMap[row].length; column++)
            {
                dupe[row][column] = pMap[row][column];
            }

        }

        this.map = dupe;
    }

    /**
     * Adds token to the map in the bottom most space in the column
     * returns true if space is found, false if not or pColumn was invalid
     */
     addTokenToMap(pColumn, pToken)
     {
         let row = this.map.length - 1;
         if(pColumn >= 0 && pColumn < this.map[0].length) //column valid
         {
             while(this.map[row][pColumn] != 0 && row > -1) //row = bottom most or -1 if none found
             {
                 row = row - 1;
                 if(row <= -1)
                 {
                     break;
                 }
             }
         }
         else //column invalid
         {
             return false;
         }   
 
         if(row != -1) //space found for token
         {
             this.map[row][pColumn] = pToken;
             return true;
         }
         else
         {
             return false;
         }
 
     }

    
}
