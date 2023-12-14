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
  startDate: Date;
  endDate?: Date;
};

function Date({ startDate, endDate }: DateProps) {
  const startDateFormating = dayjs(startDate).format('DD MMMM YYYY');

  if (endDate) {
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

// HOW TO USE <DATE /> COMPONENT
// It except 2 props
// startDate="string" (required)
// endDate="string" (optional)
