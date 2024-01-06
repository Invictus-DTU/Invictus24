import Team from "../../../models/team";
import User from "../../../models/user";
import Event from "../../../models/event"
import excelJs from "exceljs";
import { NextResponse } from "next/server";
import connectDb from "../../../helper/config";
connectDb();

export async function POST(req){
    try {
        const reqBody= await req.json();
        const {name} = reqBody;
        let teams;
        
        if(name === ""){
          teams = await Team.find({}).populate('teamLeader').populate('eventName').populate('member');
        }
        else{
          const event = await Event.findOne({name});

          if(event){
            teams = await Team.find({eventName: event?._id}).populate('teamLeader').populate('eventName').populate('member');
          }
          else{
            return NextResponse.json({
              error: "event not found"
            })
          }
        }

        if(teams.length === 0){
          return NextResponse.json({
            error: "teams not found!"
          })
        }

        let workbook = new excelJs.Workbook();
        const sheets = workbook.addWorksheet("teams");
    
        sheets.columns = [
          { header: "Event", key: "event", width: 30 },
          { header: "Prize", key: "prize", width: 30 },
          { header: "Venue", key: "venue", width: 50 },
          { header: "Time", key: "time", width: 30 },
          { header: "Society Name", key: "soc", width: 50 },
          { header: "Registeration Starts", key: "reg_start", width: 30 },
          { header: "Registeration Ends", key: "reg_end", width: 30 },
          { header: "Team Name", key: "teamname", width: 30 },
          { header: "Team Id", key: "teamid", width: 30 },
          { header: "Team Leader", key: "leader", width: 30 },
          { header: "member1", key: "member1", width: 30},
          { header: "member1 email", key: "email1", width: 30},
          { header: "member1 phone", key: "phone1", width: 30},
          { header: "member1 college", key: "college1", width: 30},
          { header: "member2", key: "member2", width: 30},
          { header: "member2 email", key: "email2", width: 30},
          { header: "member2 phone", key: "phone2", width: 30},
          { header: "member2 college", key: "college2", width: 30},
          { header: "member3", key: "member3", width: 30},
          { header: "member3 email", key: "email3", width: 30},
          { header: "member3 phone", key: "phone3", width: 30},
          { header: "member3 college", key: "college3", width: 30},
          { header: "member4", key: "member4", width: 30},
          { header: "member4 email", key: "email4", width: 30},
          { header: "member4 phone", key: "phone4", width: 30},
          { header: "member4 college", key: "college4", width: 30},
          { header: "member5", key: "member5", width: 30},
          { header: "member5 email", key: "email5", width: 30},
          { header: "member5 phone", key: "phone5", width: 30},
          { header: "member5 college", key: "college5", width: 30},
        ];
    
        for (const value of teams) {
          sheets.addRow({
            event: value.eventName?.name,
            prize: value.eventName?.prize,
            venue: value.eventName?.venue,
            time: value.eventName?.time,
            soc: value.eventName?.societyName,
            reg_start: value.eventName?.date,
            reg_end: value.eventName?.registrationEndDate,
            leader: value.teamLeader?.username,
            member1: value.member[0]?.username,
            email1: value.member[0]?.email,
            phone1: value.member[0]?.phone,
            college1: value.member[0]?.college,
            member2: value.member[1]?.username,
            email2: value.member[1]?.email,
            phone2: value.member[1]?.phone,
            college2: value.member[1]?.college,
            member3: value.member[2]?.username,
            email3: value.member[2]?.email,
            phone3: value.member[2]?.phone,
            college3: value.member[2]?.college,
            member4: value.member[3]?.username,
            email4: value.member[3]?.email,
            phone4: value.member[3]?.phone,
            college4: value.member[3]?.college,
            member5: value.member[4]?.username,
            email5: value.member[4]?.email,
            phone5: value.member[4]?.phone,
            college5: value.member[4]?.college,
          });
        }
  
      const buffer = await workbook.xlsx.writeBuffer();

      return NextResponse.json({
        message: "download successful!",
        buffer
      })

      } catch (error) {
        console.log(error);
        return NextResponse.json({error: "Internal Server Error"},{status: 500});
      }
}