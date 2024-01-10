//import User from '../../../model/user';
//import config from '../../../helper/config';

import {NextResponse} from 'next/server';
 
export function GET(request) {
   return NextResponse.json({valid: true}); 
}