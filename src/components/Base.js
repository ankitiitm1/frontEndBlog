import CustomNavBar from "./CustomNavBar";

const Base=({title="Welcome to the blogging website", children})=>{
return(
    <div className="container-fluid m-0 p-0">

        <CustomNavBar/>
         {children}
       

    </div>
);
};

export default Base;