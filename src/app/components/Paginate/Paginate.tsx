import React, { FC, useCallback } from "react";
import styles from "./Paginate.module.scss";
import { useDebounce } from "../../hook/use-Debounce";

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
            onClick={(e) =>
              handleChange && handleChange("" + Math.max(1, current - 1))
            }
          >
            {"<< Prev "}
          </u>
          &nbsp;&nbsp; from {1} to {total}, current Value: {current}
          &nbsp; &nbsp; &nbsp;
          <u
            onClick={(e) =>
              handleChange && handleChange("" + Math.min(current + 1, total))
            }
          >
            {"Next >>"}
          </u>
          &nbsp;
        </label>

        <input
          className="paginateInput"
          min={1}
          type="range"
          value={current}
          onChange={handleNext}
          max={total}
        />
      </div>
    </div>
  );
};

export default Paginate;
