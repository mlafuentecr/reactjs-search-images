const ImageList = (props) => {
  
  if(props.images.length !== 0){
    console.log('imagenes no vacias');
    return (
      <div className='ui small images'>
       {
        props.images.map(({id, description, urls}) =>
        <div className="imgWrap"><img key={id} alt={description} src={urls.small} /></div>
        )
       }
       <div className='imgCount'> 
       { `( Total images found ${props.images.length} )` }
      </div>
      </div>
    );
  }

  //if there is not images
return (<></>)

};



export default ImageList;