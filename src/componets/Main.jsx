import { Select } from "antd";
import React from "react";

export const  Main = () => {
    const f = ['Месяц', 'Квартал', 'Год']
    return (
        <main className="main">
          <section className="section-left">
            <h1>SMART-задачи</h1>

            <div>
                <Select option = {f}>
                    
                </Select>
            </div>
          </section>
        </main>
    );
  }
  
//   export default Main;