import {getKindeServerSession} from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation';

const DashBoardPage = async () => {
    const {isAuthenticated ,  getUser}  = getKindeServerSession();
    const checkAuthentication = await isAuthenticated();
    console.log("checkAuthentication == >",checkAuthentication);
    const user = await getUser(); 
    console.log("user==>",user);
    if (!user) {
        return redirect('/signup')
    }
  return (
    <div className='flex justify-center items-center h-screen'>
      hello , 
      <h1 className='font-bold text-xl'>{user.given_name  + user.family_name} </h1>
    </div>
  )
}

export default DashBoardPage;
