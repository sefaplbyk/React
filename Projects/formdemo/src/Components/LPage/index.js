import React from "react";

function List(props) {
  return (
    <div>
      <br />
      E-Mail:{props.data[0].email}
      <br />
      Password:{props.data[0].password}
      <br />
      Name:{props.data[1].name}
      <br />
      Surname:{props.data[1].surName}
      <br />
      Gender:{props.data[1].gender}
      <br />
      Hobies:{props.data[1].hobies}
      <br />
      Değerlendirme:{props.data[2].degerlendirme}
      <br />
      Tavsiye:{props.data[2].tavsiye}
      {/* {console.log(props.data)} */}
      <h3>Bizi tercih ettiğiniz için teşekkürler</h3>
    </div>
  );
}

export default List;
