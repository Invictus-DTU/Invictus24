//import User from '../../../model/user';
//import config from '../../../helper/config';

import {NextResponse} from 'next/server';
import { cookies } from 'next/headers'
 
export function GET(request) {
   return NextResponse.json({valid: true}); 
}