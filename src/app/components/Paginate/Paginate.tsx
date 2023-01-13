import React, { FC, useState, useCallback } from 'react';
import styles from './Paginate.module.scss';
import { useDebounce } from '../../hook/use-Subject';


interface PaginateProps {
  current?: number, total?: number, currentChange?: (val: number) => void
}
const Paginate: FC<PaginateProps> = ({ current = 1, total = 1, currentChange }) => {
  const [selected, setSelected] = useState<number>(current)
  const handleChange = useCallback((val: string) => {
    setSelected(parseInt(val));
    if (currentChange)
      currentChange(parseInt(val))
  }, [currentChange])
  const [handleNext] = useDebounce(handleChange)




  return (
    <div className={styles.Paginate} data-testid="Paginate" >
      <div>
        <label>from {1} to {total}, current Value: {selected}</label>
        <input className='paginateInput' min={1} type="range" onChange={handleNext} max={total} />

      </div>
    </div >
  );
}

export default Paginate;
