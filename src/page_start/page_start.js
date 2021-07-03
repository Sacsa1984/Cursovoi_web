import React from "react";
import './page_start.css'
import {Form,Regist_dan} from "../Forma/Forma_reg"
import { useState } from "react";


export function StartPage ()
{
    const [name,setname]=useState(" ");
const [lastname, setlastname]=useState(" ");
const [email,setemail]=useState(" ");

 let Myfun=(newName,newlasnam,newemail)=>{setname(newName);setlastname(newlasnam);setemail(newemail)}

    return ( 
        <div className="StartP">
        <header className="MYheader"> 
        <img className="MYheader_vn1" src="Kryvyi_Rih_Logotype_02.png"></img>
        <img className="MYheader_vn2" src="unnamed.jpg" width="100" height="100"></img>
        <img className="MYheader_vn3" src="unnamed.jpg" width="100" height="100"></img>

        <div className="MYheader_vn4"><Form onclic={Myfun} /> 

 <Regist_dan Mydan={name} MyLast={lastname} MyEmail={email} ></Regist_dan></div> 
 
 </header>

        <nav className=" MYnav">
        <ul>
    <li>Кино</li>
    <ul> 
        <li><a href="https://www.olimpkino.dp.ua/">Олимп</a></li>
        <li><a href="https://multiplex.ua/ru/cinema/kryvyi_rih/victoriaplaza">Multiplex у ТРЦ "Victory Plaza"</a></li>
        <li><a href="https://multiplex.ua/cinema/kryvyi_rih/union">Multiplex у ТРЦ "Union"</a></li>

    </ul>
    <li><a href="http://circus.kr.ua/">Цирк</a></li>
    <li><a href="https://www.facebook.com/lednikperiodkr/">Каток "Ледниковый период"</a></li>
    <li><a href="https://www.facebook.com/pages/category/Bowling-Alley/%D0%91%D0%BE%D1%83%D0%BB%D0%B8%D0%BD%D0%B3-%D0%BA%D0%BB%D1%83%D0%B1-Ubowl-123354745264189/">Боулинг клуб "Ubowl"</a></li>
    

        </ul>

                </nav>
        <article className="Myarticle"></article>
        <div className="Content_1">
        
        <div className="Content_napol" >  <img  src="Kryvyi_Rih_Logotype_02.png" width="80%" height="80%"></img></div>
        <div className="Content_napol">  <img  src="Kryvyi_Rih_Logotype_02.png" width="80%" height="80%"></img></div>
        </div>

        <div className="Content_2">
        <div className="Content_napol">  <img  src="Kryvyi_Rih_Logotype_02.png" width="80%" height="80%"></img></div>
        <div className="Content_napol">  <img  src="Kryvyi_Rih_Logotype_02.png" width="80%" height="80%"></img></div>
    
        </div>
        <article className="Myarticle"> AAA</article>
        </div>
       
    );
}