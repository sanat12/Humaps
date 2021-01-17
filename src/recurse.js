let store=arr1;
   
function recurse(parent,childarr){
  if(childarr===undefined){
    
    for(let i=0;i<parent.length;i++)
    {
      let parentitems=[];
      let keys=Object.keys(parent[i])
      let values=Object.values(parent[i])
      
      for(let j=1;j<keys.length-1;j++){
        parentitems.push(
          <span>
            <h4>{keys[i]}</h4>
            <p>{values[i]}</p>
          </span>
        );
      }
      
      for(j=0;j<parent[i].children.length;j++){

      }

    }
    console.log(values)
    return;
  }
  else{
    recurse(childarr,childarr.children)
  }
}
recurse(arr,arr.children);