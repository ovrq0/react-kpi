import { Select } from "antd";
import React from "react";
import { Button, Input, Space } from "antd";
import {
  AutoComplete,
  Cascader,
  Col,
  DatePicker,
  InputNumber,
  Row,
  Tooltip,
} from "antd";

export const Main = () => {
  const f = ["Месяц", "Квартал", "Год"];
  return (
    <main className="main">
      <section className="section-left">
        <h1>SMART-задачи</h1>

        <div className="time">
          <Select defaultValue="Месяц" style={{ width: 188, height: 32 }}>
            <option value="value1">Месяц</option>
            <option value="value2">
              Квартал
            </option>
            <option value="value3">Год</option>
          </Select> <br />

        
          <DatePicker
            style={{
              width: 188, height: 32,
            }}
          />
        </div>
        <div>
          <Input style={{ width: 188, height: 32 }}></Input><br />
          <Select defaultValue="Цели МВО(Годовые)" style={{ width: 188, height: 32 }}>
            <option value="value1">Цели МВО(Годовые)</option>
            <option value="value2">
            Цели МВО(Квартальные)
            </option>
            <option value="value3">Цели МВО(Бюджет)</option>
            <option value="value4">Цели МВО(Госплан)</option>
            <option value="value5">Долж. инструкции(ДИ)</option>
          </Select> 
        </div>

        <div>
          <Button style={{ width: 188, height: 32 }}>Утвердить</Button><br />
          <Button style={{ width: 188, height: 32 }}>Выполнить</Button>
        </div>
        <div >
        <Button className="portal" style={{
           width: 188, 
           height: 32,
        }} type="primary">Портал сотрудника</Button>
        </div>
      </section>

      <section className="right-section">
        <div className='header1'>
          <div className='header1__leftpart'>
          <div className="header1__img">
              <img src="../componets/ArrowLeft.png" alt="" />
            </div>
          <div className='header1__stager'>Стажёр Фамилия Имя Отчество</div>
          </div>
          <div className='header1__percents'>100%</div>
        </div>
      </section>
    </main>
  );
};

//   export default Main;
