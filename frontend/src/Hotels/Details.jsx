import React from "react";

import style_dl from "./Details.module.css";

const Details = () => {
  let str = [
    "Flights ",
    " International Flights ",
    " Charter Flights ",
    " Hotels ",
    " International Hotels ",
    " Homestays and Villas ",
    " Activities ",
    " Holidays In India ",
    " International Holidays ",
    " Book Hotels From UAE",
    " myBiz for SME Travel",
    " Book Online Cabs",
    " Book Bus Tickets",
    " Book Train Tickets",
    " Vande Bharat Mission Flights",
    " Air Bubble Flights",
    " Cheap Tickets to India",
    " Book Flights From US",
    " Book Flights From UAE",
    " Trip Planner",
    " Gift Cards",
    " Trip Money",
    " Trip Ideas",
    " Travel Blog",
    " PNR Status",
    " MakeMyTrip Advertising Solutions",
  ];

  let str2=[
    'About Us',
    ' Investor Relations',
    ' Careers',
    ' Corporate Travel',
    ' MMTFoundation',
    ' CSR Policy',
    ' myPartner - Travel Agent Portal',
    ' ForeignExchange',
    ' Listyour hotel',
    ' Partners- Redbus',
    ' Partners- Goibibo',
    'Advertise with Us'
  ]

  let str3=[
    'Customer Support',
    ' Payment Security',
    ' Privacy Policy',
    ' User Agreement',
    'Terms of Service',
    ' More Offices',
    ' Make A Payment',
    ' Work From Home'
  ]
  let str4=[
    'Hotels In Goa',
    ' Hotels In Mumbai',
    ' Hotels In Mahabaleshwar',
    ' Hotels InMatheran',
    ' Hotels In Lonavala',
    ' Hotels In Delhi',
    ' Hotels In Shimla',
    'Hotels In Lansdowne',
    ' Hotels In Digha',
    ' Hotels In Puri',
    ' Hotels In Nainital',
    ' Hotels In Shirdi',
    ' Hotels In Bangalore',
    ' Hotels InMussoorie',
    ' Hotels In Manali',
    ' Hotels Near Me',
    ' Cheap Hotels',
    ' Hotels In Jaipur',
    ' Hotels In Udaipur',
    ' Hotels In Pune',
    ' Hotels In Pondicherry',
    'Hotels In Ooty',
    ' Hotels In Kodaikanal',
    ' Hotels In Darjeeling',
    ' Hotels In Chandigarh',
    ' Hotels In Mount abu',
    ' Hotels In Ahmedabad',
    ' Hotels In Kolkata',
    ' Hotels In Ranthambore',
    ' Jaisalmer Hotels',
    ' Mysore Hotels'
  ]
  let str5=[
    'W Goa',
    ' The Leela Goa',
    ' The Tamara Coorg',
    ' Evolve Back Coorg',
    ' Grand Hyatt Goa',
    ' Taj Lake Palace Udaipur',
    ' The Leela Palace Udaipur',
    ' Grand Hyatt Mumbai',
    ' Jw Marriott Chandigarh',
    ' Alila Diwa Goa',
    ' Evolve Back Hampi',
    ' Evolve Back Kabini',
    ' Hyatt Regency Mumbai',
    ' Le Meridien Delhi',
    'Itc Grand Chola Chennai',
    ' Rambagh Palace Jaipur',
    ' Le Meridien Goa',
    ' Taj Lands End Mumbai',
    ' Jai Mahal Palace Jaipur',
    ' Vythiri Resort Wayanad',
    'Red Earth Kabini',
    ' Taj Mahal Tower Mumbai',
    ' The Serai Bandipur',
    'Wildflower Hall Shimla',
    ' Azaya Beach Resort Goa',
    ' Four Seasons HotelMumbai',
    ' Taj Fort Aguada Resort & Spa Goa',
    'Itc Maratha Mumbai',
    ' Park Hyatt Chennai',
    ' Sea Shell Havelock',
    ' Spice Tree Munnar'
  ]
  let str6=[
    'Mahabaleshwar Resorts',
    ' Resorts In Agra',
    ' Resorts In Bhimtal',
    ' Resorts In Bordi',
    ' GraResorts In Br Hills',
    ' Resorts In Chikmagalur',
    ' Resorts In Cochin',
    ' Resorts In Darjeeling',
    ' Resorts In Dehradun',
    ' Resorts In Dharamshala',
    ' Resorts In Gorai',
    ' Resorts In Jaipur',
    ' Resorts In Jaisalmer',
    ' Resorts In Jodhpur',
    ' Resorts In Kanakapura',
    ' Resorts In Kollam',
    ' Resorts In Kotagiri',
    ' Resorts In Lucknow',
    ' Resorts In Madikeri',
    ' Resorts In Mahabaleshwar',
    ' Resorts In Masinagudi',
    ' Resorts In Matheran',
    ' Resorts In Mount Abu',
    ' Resorts In Mumbai',
    ' Resorts In Munnar',
    ' Resorts In Mussoorie',
    ' Resorts In Mysore',
    ' Resorts In Nainital',
    ' Resorts In Neemrana',
    ' Resorts In Kodaikanal'
  ]
  let str7=[
    'Homestays In Chikmagalur',
    ' Homestays In Coorg',
    ' Homestays In Sakleshpur',
    ' Homestays In Goa',
    ' Homestays In Ooty',
    ' Homestays In Darjeeling',
    ' Homestays In Manali',
    ' Homestays In Munnar',
    ' Homestays In Wayanad',
    ' Homestays In Bengaluru',
    ' Homestays In Kasauli',
    ' Homestays In Kodaikanal',
    ' Homestays In Shimla',
    ' Homestays In Mysore',
    ' Homestays In Dandeli',
    ' Homestays In Dehradun',
    ' Homestays In Gokarna',
    ' Homestays In Mussoorie',
    ' Homestays In Nainital',
    ' Homestays In Rishikesh',
    ' Homestays In Vagamon',
    ' Homestays In Alibaug',
    ' Homestays In Kalimpong',
    ' Homestays In Mangalore',
    ' Homestays In Pondicherry',
    'Homestays In Yercaud',
    ' Homestays In Coonoor',
    ' Homestays In Kabini',
    ' Homestays In Kasol',
    ' Homestays In Kurseong',
    ' Homestays In Mukteshwar'
  ]
  return (
    <>
      <div className={style_dl.container}>
        <div className={style_dl.smalldiv}>
          <h5>PRODUCT OFFERING</h5>
          <p>
            {str.map((ele) => {
              return <span>{ele},</span>;
            })}
          </p>

          <h5>MAKEMYTRIP</h5>
         <p>
            {str2.map((ele) => {
              return <span>{ele},</span>;
            })}
          </p>

          <h5>ABOUT THE SITE</h5>
          <p>
            {str3.map((ele) => {
              return <span>{ele},</span>;
            })}
          </p>

          <h5>TOP CITIES</h5>
          <p>
            {str4.map((ele) => {
              return <span>{ele},</span>;
            })}
          </p>

          <h5> TOP PROPERTIES</h5>
          <p>
            {str5.map((ele) => {
              return <span>{ele},</span>;
            })}
          </p>

          <h5>TRENDING RESORT CITIES</h5>
          <p>
            {str6.map((ele) => {
              return <span>{ele},</span>;
            })}
          </p>

          <h5>TOP HOMESTAY CITIES</h5>
          <p>
            {str7.map((ele) => {
              return <span>{ele},</span>;
            })}
          </p>
        </div>
      </div>
    </>
  );
};

export default Details;
