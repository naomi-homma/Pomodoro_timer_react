import React from 'react';
import Button from '@material-ui/core/Button';


const userInput = () => {
  return (
    <div class="container">
    <p>■タイマーは以下で調整できます■</p>
      <form id="form_id" method="" action="" onsubmit="return false">
        <ul>
          <li>
            <label for="work">作業時間：
            <input type="number" name="work" id="work_time" value="25" />
            </label>
          </li>
          <li>
            <label for="break">小休憩時間：
            <input type="number" name="break" id="break_time" value="5" />
            </label>
          </li>
          <li>
            <label for="longbreak">長休憩時間：
            <input type="number" name="longbreak" id="longbreak_time" value="20" />
            </label>
          </li>
          <li>
            <label for="cycle">長休憩までの回数：
            <input type="number" name="cycle" id="cycle_count" value="4" />
            </label>
          </li>
          <button type="submit" class="btn" id="submit_btn">設定</button>
        </ul>
        <Button variant="contained">OK</Button>
      </form>
    </div>
  );
};

export default userInput;