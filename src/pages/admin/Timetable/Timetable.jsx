import './Timetable.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import refreshIcon from '../../../assets/icons/refresh.png';
import plusIcon from '../../../assets/icons/plus.png';

export default function Timetable()
{
    const days = [
        {key: 'MON', label: '월'},
        {key: 'TUE', label: '화'},
        {key: 'WED', label: '수'},
        {key: 'THU', label: '목'},
        {key: 'FRI', label: '금'}
    ];

    const courseColors = ['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF', '#D7BAFF', '#FFBAE1'];

    const hours = Array.from({ length: 14 }, (_, i) => i + 9);

    const timetable=[
        {
            id: 1,
            course_name : '알고리즘 개론',
            professor_name : '김철수',
            room : 'IT대학 5호관 321호',
            day_of_week : 'MON',
            start_time : '09:00',
            end_time : '10:30'
        },
        {
            id: 2,
            course_name : '데이터베이스',
            professor_name : '이영희',
            room : 'IT대학 5호관 322호',
            day_of_week : 'TUE',
            start_time : '10:30',
            end_time : '12:00'
        },
        {
            id: 3,
            course_name : '운영체제',
            professor_name : '박민수',
            room : 'IT대학 5호관 323호',
            day_of_week : 'WED',
            start_time : '13:00',
            end_time : '14:30'
        }
    ];


    const getCourseColor = (index) => {
        return courseColors[index % courseColors.length];
    }

    const calculatePosition = (startTime, endTime) =>
        {
            const [startHour, startMinute] = startTime.split(':').map(Number);
            const [endHour, endMinute] = endTime.split(':').map(Number);

            const startM = (startHour - 9) * 60 + startMinute;
            const durationM = (endHour - startHour) * 60 + (endMinute - startMinute);

            return {
                top: startM+'px',
                height: durationM+'px'
            };
        }
    const formatHour = (hour) =>
        {
            if (hour === 12) return '12:00 PM';
            if (hour > 12) return hour - 12 + ":00 PM";
            return hour + ":00 AM";
        };

    return(
        <div className="timetable_container">
            <div className="timetable_header">
                <div>
                    <h1 className="timetable_page_title">시간표 관리</h1>
                    <p className="timetable_page_subtitle">시간표를 확인하고 관리할 수 있습니다.</p>
                </div>

                <div className="timetable_button_group">
                    <button type="button" className="timetable_btn timetable_btn_disabled" disabled>
                        <img src={refreshIcon} alt="시간표 생성" className="timetable_btn_img"/>
                        <span>시간표 생성</span>
                    </button>

                    <button type="button" className="timetable_btn timetable_btn_disabled" disabled>
                        <img src={plusIcon} alt="수동 입력" className="timetable_btn_img plus_icon"/>
                        <span>수동 입력</span>
                    </button>
                </div>
            </div>

            <div className="timetable_wrapper">
                <div className="timetable_grid">
                    <div className="grid_header">
                        <div className="day time_title"></div>
                        {days.map((day) => (
                            <div key={day.key} className="day">
                                {day.label}
                            </div>
                        ))}
                    </div>

                    <div className="grid_body">
                        <div className="time_column">
                            {hours.map((hour) => (
                                <div key={hour} className="time">
                                    <span>{formatHour(hour)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="days">
                            <div className="grid_lines">
                                {hours.map((hour) => (
                                    <div key={hour} className="grid_line_row"></div>
                                ))}
                            </div>
                            {days.map((day) => (
                                <div key={day.key} className="day_column">
                                    {timetable.filter((schedule) => schedule.day_of_week === day.key).map((item) => {
                                        const style = calculatePosition(item.start_time, item.end_time);
                                        return (
                                            <div key={item.id} className="course_block" style={{...style, backgroundColor: getCourseColor(item.id - 1)}}>
                                                <div className="course_title">{item.course_name}</div>
                                                <div className="course_info">{item.professor_name} {item.building} {item.room}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}