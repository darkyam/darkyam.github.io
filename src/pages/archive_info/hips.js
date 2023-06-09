import '../css/archive_info_style.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Hip () {
    return (
        <div className='archive_all'>
        <div className='archive_name'>
            <p>
                HIPS
            </p>
        </div>
        <div className='archive_poster'>
            <img src='https://i.imgur.com/ewLJxeo.jpeg'/>
        </div>
        <div className='archive_title'>
            <p>
            미리보기: Piled
            </p>
        </div>
        <div className='archive_info'>
            <p>
            사진이라는 매체는 때로 ‘모호한 시각언어’로 받아들여진다.
그러기에 작업자들은 자신의 ‘작업’을 사람들에게 보다 더 효과적으로 전달하기 위해 대상을 보고, 상에 담는 그 모든 순간을 위한 고뇌와 시행착오를 수없이 축적해 간다.
그리고 힙스, 여기 모인 10명의 작업자들은 사진이라는 시각언어를 통해 사람들과 소통하기를 자처하며 개개인의 경험에서 시작된 대상을 향한 열망, 
시각적인 이끌림, 사회적논의에 대한 고찰, 이를 표현하기 위한 정교함 등을 모으고 쌓아 대상을 향한 소스(sauce)를 축적해 나아가며
현재, 그리고 미래의 ‘작업자’를 완성해간다.
            </p>       
        </div>
        <hr/>
        <div className='archive_link'>
        <Link to={'/archieve/HIPS/3'}>
                <img src='https://i.imgur.com/Nsp5xGT.jpeg'/>
            </Link>
            <Link to={'/archieve/HIPS/4'}>
                <img src='https://i.imgur.com/39G5QBw.jpeg'/>
            </Link>
            <Link to={'/archieve/HIPS/5'}>
                <img src='https://i.imgur.com/1kRqVkO.jpeg'/>
            </Link>
            <Link to={'/archieve/HIPS/6'}>
                <img src='https://i.imgur.com/0W6yEda.jpeg'/>
            </Link>
            <Link to={'/archieve/HIPS/7'}>
                <img src='https://i.imgur.com/108RTXd.jpeg'/>
            </Link>
            <Link to={'/archieve/HIPS/8'}>
                <img src='https://i.imgur.com/IWnTpX4.jpeg'/>
            </Link>
            <Link to={'/archieve/HIPS/9'}>
                <img src='https://i.imgur.com/78HYXKR.jpeg'/>
            </Link>
            <Link to={'/archieve/HIPS/10'}>
                <img src='https://i.imgur.com/dPdyH8r.jpeg'/>
            </Link>
            <Link to={'/archieve/HIPS/11'}>
                <img src='https://i.imgur.com/6F4JD7z.jpeg'/>
            </Link>
            <Link to={'/archieve/HIPS/12'}>
                <img src='https://i.imgur.com/QxF8EZ0.jpeg'/>
            </Link>
        </div>
    </div>
    )
    

}
export default Hip;