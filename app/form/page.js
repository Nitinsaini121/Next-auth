// "use client";
// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// // import TableData from "@/component/tabledata/page";
// import FormData from "@/components/formdata/page";
// const form = () => {
//   const [tableData, setTableData] = useState([]);
//   console.log("tableData", tableData);
//   const [editData, setEditData] = useState("");
//   const [editButton, setEditButton] = useState(false);
//   const [checkBox, setIsChecked] = useState(false);
//   const [check, setChecked] = useState();

//   // console.log("edit", editData);
//   const {
//     register,
//     handleSubmit,
//     reset,
//     control,
//     formState: { errors },
//   } = useForm();

//  useEffect(()=>{
// if(checkBox){
//   setIsChecked(false)
// }
//  },[check])


//  const handleChangeCheckBoxValue = (event) => {

//   // console.log(event.target.checked)
//   // setIsChecked(event.target.checked);
// };



// const clearcheckboxvalue = () => {
//   let constructedUrl = "ndfjdnjfj?";
//   document.querySelectorAll('input[type="checkbox"]').forEach(input => {
//     constructedUrl += `${input.name}=${input.checked}&`;
//     input.checked = false;
//   });
//   constructedUrl = constructedUrl.slice(0, -1);
//   // setUrl(constructedUrl);
//   console.log(constructedUrl);
// }
//   const onSubmit = (data) => {
//     console.log("data", data);

//     if (editButton) {
//       const updatedTableData = [...tableData];
//       updatedTableData[editData] = data;
//       setTableData(updatedTableData);
//       setEditButton(false);

//       reset();
//     } else {
//       setTableData([...tableData, data]);
//       reset();
//     }
//     setIsChecked(false)
//     clearcheckboxvalue()
//   };
//   const deleteTableData = (index) => {
//     const deleteRow = tableData.filter((item, i) => i !== index);
//     setTableData(deleteRow);
//   };
//   const editTableData = (index) => {
//     const edit = tableData[index];
//     setEditButton(true);
//     setEditData(index);
//     reset(edit);
//   };
//   return (
//     <>
//       <FormData
//         onSubmit={onSubmit}
//         register={register}
//         handleSubmit={handleSubmit}
//         errors={errors}
//         editButton={editButton}
//         control={control}
//         checkBox={checkBox}
//         setIsChecked={setIsChecked}
//       />
//       {/* <TableData
//         tableData={tableData}
//         deleteTableData={deleteTableData}
//         editTableData={editTableData}
//       /> */}
//     </>
//   );
// };
// export default form;
