'use client';
import {Box, Button, Grid, Typography} from "@mui/material";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import {useForm, SubmitHandler} from "react-hook-form"
export default function QuestionPage(){
    const router=useRouter();
    const handleClick = (e) => {
    e.preventDefault()
    // router.push("/")
  }
  const{register,
    handleSubmit,
    watch,
    formState: { errors }}=useForm()
  const handlerSubmit=()=>{

  }
    return(
        <>
     <Box
      sx={{
        marginTop:"5",
        display: "flex",
        justifyContent: "center", 
        // alignItems: "center", 
        // minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        textAlign: "center",
        p: 2,
      }}
    >
<Grid container
 spacing={2}
        justifyContent="center"
        alignItems="center"
        maxWidth="md"
   >
  <Grid size={{ xs: 6, md: 8 }}>
    
        <Typography style={{margin:5}}>
            Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Praesentium laudantium
            pariatur at, nihil possimus sint dolores 
            explicabo officiis, accusantium quis in non. 
        </Typography>
   <Button variant="contained"onClick={handleClick} >go to guestions</Button>
  </Grid>
  <Grid size={{ xs: 6, md: 4 }}>
    
   <Image
    src="/download.jpg"
      width={300}
      height={100}
      alt="Picture of the author"
      style={{padding:4}}/>
  </Grid>
 <Grid size={{ xs:12, md: 12}}>
      <Box sx={{ fontSize: 'h6.fontSize', m: 1 }}>Ask Your Question </Box>
 </Grid>
 <Grid size={{ xs:12, md: 12}}>
  <form onSubmit={handlerSubmit}>
  <input {...register("exampleRequired", { required: true })} />
  <input {...register("exampleRequired", { required: true })} />
  <button>onSubmit</button>
  </form>
 </Grid>
</Grid>
</Box>
        </>
    )
}