import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Icon from '@/components/icon';

export default function SearchWithDropdown(
  props: React.HTMLProps<HTMLDivElement>,
) {
  return (
    <div
      {...props}
      className={`${props.className} h-[40px] text-body text-text`}
    >
      <input
        type="text"
        className="h-full w-0 flex-1 rounded-l-[12px] border-2 border-border bg-border"
        placeholder="Search"
      />
      <div className="relative h-full">
        <div className="absolute right-4 flex h-full items-center">
          <Icon icon={<MagnifyingGlassIcon />} w="14px" h="14px" />
        </div>
      </div>
      <select className="flex h-full w-fit items-center rounded-r-[12px] border-y-2 border-r-2 border-border bg-background py-[5px] pl-[16px] pr-[38px]">
        <option value="courses">Courses</option>
        <option value="professors">Professors</option>
      </select>
    </div>
  );
}
