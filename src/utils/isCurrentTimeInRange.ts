/** 현제 시간이 범위 내에 있는지 확인하는 함수 */

export default function isCurrentTimeInRange(range: string): boolean {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  const [start, end] = range.split("~").map((time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  });

  return currentTime >= start && currentTime <= end;
}
