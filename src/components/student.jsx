import React from "react";

const Student = ({ student }) => {
  return (
    <div className="card m-2" style={{ width: "12rem" }}>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAM1BMVEXu7u6ys7Po6Ojl5eXf39/Y2Ni6u7vb29vq6+vU1NTi4uK1trbKysq7vLzMzMzQ0NDExMQIkX2tAAAFB0lEQVR4nO2d6bqjIAyGq7gryv1f7dSttR1FBfIlpw/vP2clE7ICmccjEolEIpFIJBKJRCKRSCQSiUQikUgkEolEYFTbj0J3ZXX0KyWjiiRJCjM0y7d5fiYmY12TG10yo/Pp0yxff0KUart3VLIyLb5Yv7qUa3mXSGszLbU1/WoK+iVJ0ldvsZKisf9RrKjNqp+mkI+ybH9Ibz/aknu5NvJ2K0o7pE1yjGhDUcXnYtt9GeafU9yrtaFsS//CcC/WSn5dkCTnXuwhZa9vaCQpREb5KuvvCCFUJbq4LcTIxkqEKKd2EePJK8Arzbn8N5WTQt57q9KJkFA/uAnSL7+9E2Mv6nzReyxGMv4zDLwCPEnLuq7L4nTRexTTHzBl9zWzGJlx08XCU5fDbF/MW6v3EuOpkpeX4DX2zrbIW7SsgcQ1fOywmD1PRnwn1T2jy7KsfFaYLIL42fku/fnfGh7H2GGDJx8OZ+krLYvrSn9EjpAua0YzFfFuSYmFomaxkCy0HFyiEPjeZOqFgeUIb+qrKB3WVBwrqQtoaDM1DZidfNCBO6lkCtFYcw+ZLn7RQQWhcVkzyPB+p8F7G6BKCDdWgqwV0+DJyScw9zu2f+rgKeMbbHFV0QmCPQAiKA9XsHW77ZjTF6ggFFn8CjS4l78iCGVM/BlBkHJQCtL+iiBY90to7NiASOh+sRUJYUDEniaSdVGA2e8EYdII7pySFVfosx59viQ3sLZO2H9AX3ak6mzBj3epQjv8FJGqRMSf9tC4LbSpP6isneH4jaQhxKAQEiNpWS7/E4REBoWoTBHsrfpRKahSpgtzBG7LjFoucJfpCBu/E6gdRtguXQDdCwx/m+Yb0HVm0nOeGUhcpOxfr0ByedITxAWI46L2WSOQTkoU5AaQrUV5NLICCSQIrwW5/kDYm3uB6UCQtbRegCI7fYoCyhrprR3UpHN9GnYZWJOOem/BKl7qggTXE6JVCbAFQXbJdATaE6JM5bHv33yfux2DbsdTmQm+R0dz0sPx0rUMb/FMQ0aq0IbSs72qTIdwV2cL+NORT5owtjLwP8wPU2dJmPkQYnfxPG39IsRhIseR23+ESFdETHwIUGfxvmZ/4e+3+CdXTHgn9TyHuTv4NlG5J3C88et0CRm3M+L1WEnU6DOfVpessXruwURECNngavByDH3FTSfS9DGS3bf4VuawRnXXC3NNeTilutda6WRkWLvcaEjInmZ6XSmS1THTXLEUzV+iX6A+21+tvOCxT2qvfo2UrP0CtoaEiEbDVWw9SJYZWq7YMq+/YiATtsRLYnp1yM8I8jNb62eM3RZIZA/1/sI6Z517cTew302TWoX8z0mFJbae+kTl5+cMJpcnS6qyrMzrehj6zhh9/dSn0MZ0/TDUdV5mGfbZyAcqH8ytefdntNoMaE01g6G6VtMa2LmoCngmvU8xABTTUE47e2OI1ZLS3zBdIf1/fByaie4QtiERL0e2UCX8aDmoJEG8UviGohvZIO1jhWAoM/UswAOK0L6ron+isE/o4aZ0t0rPCFsZcxj6SkiDJ715fUbICx6Y/OqIcN0KfCT8JFRcZN1YI6E2Fy7jPSLMTUHKIZlXCZIIc4XCLSFuQiGe5p7j3/lmt/QZf3vnt/QZX3unn7hxFc/GCm9M3+IX3yW43hUvFyzB9a74uGDuJOsTj3yep7w9wv3KhCyFeGTBshTirhIZyckWW6LyD9M9R3Mh5UUQAAAAAElFTkSuQmCC"
        className="card-img-top"
        alt="..."
        height="100rem"
      />
      <div className="card-body">
        <h5 className="card-title">{student.name}</h5>
        <p className="card-text">
          Email: {student.email}
          <br />
          Age: {student.age}
        </p>
      </div>
    </div>
  );
};

export default Student;
