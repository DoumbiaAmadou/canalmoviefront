import React, { FC, useCallback } from "react";
import styles from "./Paginate.module.scss";
import { useDebounce } from "../../hook";

interface PaginateProps {
  current?: number;
  total?: number;
  currentChange?: (val: number) => void;
}
const Paginate: FC<PaginateProps> = ({
  current = 1,
  total = 1,
  currentChange,
}) => {
  const handleChange = useCallback(
    (val: string) => {
      if (currentChange) currentChange(parseInt(val));
    },
    [currentChange]
  );
  const [handleNext] = useDebounce(handleChange);

  return (
    <div className={styles.Paginate} data-testid="Paginate">
      <div>
        <label>
          <u
            role="prev"
            onClick={(e) =>
              handleChange && handleChange("" + Math.max(1, current - 1))
            }
          >
            {"<< Prev "}
          </u>
          &nbsp; Page: from {1} to {total}, current Page: {current}
          &nbsp;
          <u
            role="next"
            onClick={(e) =>
              handleChange && handleChange("" + Math.min(current + 1, total))
            }
          >
            {"Next >>"}
          </u>
          &nbsp;
        </label>
        <br />
        <input
          className="paginateInput"
          min={1}
          type="range"
          value={current}
          onChange={handleNext}
          max={total}
        />
        <br /> <br />
      </div>
    </div>
  );
};

export default Paginate;
