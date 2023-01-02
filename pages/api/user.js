import {user_data} from './../../user_data';


export default function hendeler (req, res){
	
	res.status(200).json(user_data);
}