import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ArrowsUpDownIcon,
} from '@heroicons/react/24/outline';

function Arrows() {
  return (
    <div className="self-center">
      <span className="hidden lg:block">
        <ArrowLongRightIcon width={24} />
        <ArrowLongLeftIcon width={24} />
      </span>
      <span className="block lg:hidden">
        <ArrowsUpDownIcon width={24} />
      </span>
    </div>
  );
}

export default Arrows;
