const numIsland=(grid)=>{
    let countIsland=0
    for(let rowIndex in grid){
      for(let colIndex in grid){
        if(grid[rowIndex,colIndex]===1){
            countIsland++;
          teraform(parseInt(rowIndex),parseInt(colIndex),grid)
        }
       
      }
    }
    return countIsland;
  }
  
  const teraform=(row,col,grid)=>{
    if(grid[row]===undefined||grid[row][col]===undefined||grid[row][col]===0) return
    grid[row,col]=0
    teraform(row+1,col,grid)
    teraform(row-1,col,grid)
    teraform(row,col+1,grid)
    teraform(row,col-1,grid)
  }



   console.log(numIsland(grid)); 