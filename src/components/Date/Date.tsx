/* eslint-disable react/require-default-props */
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/fr';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);
dayjs.locale('fr');

type DateProps = {
  startDate: string;
  endDate?: string;
};

function Date({ startDate, endDate = 'N/A' }: DateProps) {
  const startDateFormating = dayjs(startDate).format('DD MMMM YYYY');

  if (endDate !== 'N/A') {
    const endDateFormating = dayjs(endDate).format('DD MMMM YYYY');
    return (
      <span>
        {startDateFormating} - {endDateFormating}
      </span>
    );
  }

  return <span>{startDateFormating}</span>;
}

export default Date;
