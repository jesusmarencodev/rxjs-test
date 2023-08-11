import { fromEvent, map, tap } from "rxjs";

const text = document.createElement("div");
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis tempus sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ipsum scelerisque, interdum arcu non, efficitur lorem. Vivamus tincidunt urna eu pharetra facilisis. Mauris mauris felis, lobortis sed lacus ut, fringilla dapibus libero. Suspendisse eget posuere dui. Nam pellentesque, sapien a tempus vestibulum, nisl mauris congue lorem, in eleifend libero metus et augue.
<br/><br/>
Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur facilisis varius tincidunt. Nullam scelerisque bibendum nunc sit amet posuere. Mauris id ullamcorper odio, at scelerisque eros. Nam consectetur nec augue in sodales. Praesent sed libero mi. Morbi dapibus tempor auctor. Nunc mattis bibendum justo, quis maximus quam interdum elementum.
<br/><br/>
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut at ex est. Duis et porta enim, et pulvinar enim. Nam et hendrerit urna, et ullamcorper nunc. Nam porta fringilla lacus. Quisque eget dolor egestas, semper ligula sed, lacinia magna. Vestibulum rhoncus vel turpis non consequat. Phasellus quis facilisis nunc.
<br/><br/>
Mauris vel metus et ex dictum volutpat nec ac nisi. Vestibulum leo ante, rutrum vel accumsan quis, rhoncus ut ante. Praesent fermentum orci nec felis volutpat, at blandit massa tempus. Sed sodales sit amet nisl nec convallis. Nunc fringilla ipsum nulla, vel rutrum justo consequat a. Integer tempus massa vel tortor mattis dapibus. Nulla ac odio cursus dolor venenatis tincidunt non id eros. Pellentesque leo lacus, lacinia ut porta id, viverra eget est. Cras in ullamcorper urna. Nullam finibus aliquam libero, vitae volutpat orci malesuada a. In accumsan, neque in ultrices varius, nunc lacus volutpat elit, ac consectetur nulla erat nec purus. Proin vel ligula ligula.
<br/><br/>
Curabitur at ex consequat, varius dui ac, ultrices justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin id semper tellus. Etiam lacinia diam non ligula scelerisque malesuada. Suspendisse vitae lectus sagittis velit consectetur laoreet. Morbi a interdum tortor, sit amet sagittis tellus. Vestibulum posuere, nunc placerat sollicitudin suscipit, tortor augue sagittis libero, eget dignissim urna est ut neque. Etiam porttitor ultricies tincidunt. Pellentesque ex risus, porta sit amet sapien non, cursus dignissim est. In at sem lectus. Proin a vehicula arcu. Phasellus posuere tortor et est maximus, sed ultricies libero eleifend. Integer scelerisque purus id neque semper interdum. Aenean ac volutpat est, quis imperdiet metus. Sed blandit neque quis leo porta aliquet.
<br/><br/>
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc dictum dolor in justo accumsan fringilla interdum et sem. Suspendisse potenti. Etiam in malesuada sem. Nam iaculis orci a lobortis convallis. Etiam quis varius mauris. Pellentesque sit amet nibh tempus, dictum tortor nec, tristique elit. In facilisis nunc at enim eleifend feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus dapibus ante vitae diam gravida, vitae porttitor nisi euismod. Donec pharetra libero sem, quis finibus felis tempor quis. Nam placerat tempor est at tincidunt. Mauris vitae ante purus. Cras blandit venenatis ornare. Nam porttitor fermentum orci, a ornare nibh rhoncus ut. Quisque nec cursus arcu.
<br/><br/>
Donec lacinia sollicitudin nisi, a euismod odio. Praesent pretium dui ut vulputate posuere. Mauris ac viverra ipsum. Cras fringilla efficitur arcu, et semper quam placerat id. Praesent metus mi, vestibulum quis massa sed, porttitor vehicula magna. Mauris sagittis mi tortor, ut dictum enim maximus at. Aliquam erat volutpat. Ut sodales semper enim, at tempor est placerat quis. Etiam a varius erat, ac sollicitudin lacus. Integer sit amet arcu id arcu volutpat efficitur.
<br/><br/>
Mauris at sapien vel magna gravida maximus eget id dui. Nam in sapien tellus. Vivamus laoreet massa diam, lacinia congue sapien commodo in. In malesuada suscipit felis, eu pellentesque magna aliquet vitae. Integer velit ipsum, sollicitudin et dictum quis, volutpat eu leo. Sed hendrerit felis ut turpis suscipit vestibulum. Nunc nec sapien at est vehicula cursus sed sit amet justo. Phasellus turpis ligula, laoreet et semper id, molestie sit amet arcu. Duis odio quam, luctus nec nibh sed, eleifend tristique nisl. Proin odio libero, pulvinar vel pharetra id, dapibus ac elit. Donec mollis accumsan nibh et condimentum.
<br/><br/>
Nunc convallis ipsum enim, vel volutpat est tempor finibus. Phasellus quis dapibus arcu. Integer non pulvinar eros. Aenean vitae leo quis ligula consequat ullamcorper. Nullam posuere augue nec turpis congue, a convallis lectus luctus. Etiam vel scelerisque diam. Donec commodo ante eget efficitur condimentum. Donec eu mi scelerisque, pretium odio dictum, sollicitudin ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
<br/><br/>
Aliquam vitae dignissim odio, sed malesuada sapien. Sed vel enim nisl. Vestibulum fringilla ante eget quam bibendum, placerat suscipit diam interdum. Duis risus augue, cursus nec hendrerit et, condimentum a risus. Sed eget sodales mauris. Mauris et neque ante. Vestibulum euismod turpis nec blandit commodo. Aliquam placerat euismod neque quis porttitor. Curabitur quis urna lobortis, vestibulum libero vel, placerat sem. Aenean ut massa vel augue pulvinar euismod. Nam tincidunt diam turpis, vitae dapibus nulla varius at. Pellentesque lobortis leo eu erat suscipit, vel euismod est iaculis. Nunc egestas feugiat ipsum, quis convallis nisl consectetur vel. Duis ullamcorper, sem sit amet faucibus rhoncus, lacus massa egestas mauris, sit amet fermentum massa sem in nunc.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis tempus sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ipsum scelerisque, interdum arcu non, efficitur lorem. Vivamus tincidunt urna eu pharetra facilisis. Mauris mauris felis, lobortis sed lacus ut, fringilla dapibus libero. Suspendisse eget posuere dui. Nam pellentesque, sapien a tempus vestibulum, nisl mauris congue lorem, in eleifend libero metus et augue.
<br/><br/>
Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur facilisis varius tincidunt. Nullam scelerisque bibendum nunc sit amet posuere. Mauris id ullamcorper odio, at scelerisque eros. Nam consectetur nec augue in sodales. Praesent sed libero mi. Morbi dapibus tempor auctor. Nunc mattis bibendum justo, quis maximus quam interdum elementum.
<br/><br/>
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut at ex est. Duis et porta enim, et pulvinar enim. Nam et hendrerit urna, et ullamcorper nunc. Nam porta fringilla lacus. Quisque eget dolor egestas, semper ligula sed, lacinia magna. Vestibulum rhoncus vel turpis non consequat. Phasellus quis facilisis nunc.
<br/><br/>
Mauris vel metus et ex dictum volutpat nec ac nisi. Vestibulum leo ante, rutrum vel accumsan quis, rhoncus ut ante. Praesent fermentum orci nec felis volutpat, at blandit massa tempus. Sed sodales sit amet nisl nec convallis. Nunc fringilla ipsum nulla, vel rutrum justo consequat a. Integer tempus massa vel tortor mattis dapibus. Nulla ac odio cursus dolor venenatis tincidunt non id eros. Pellentesque leo lacus, lacinia ut porta id, viverra eget est. Cras in ullamcorper urna. Nullam finibus aliquam libero, vitae volutpat orci malesuada a. In accumsan, neque in ultrices varius, nunc lacus volutpat elit, ac consectetur nulla erat nec purus. Proin vel ligula ligula.
<br/><br/>
Curabitur at ex consequat, varius dui ac, ultrices justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin id semper tellus. Etiam lacinia diam non ligula scelerisque malesuada. Suspendisse vitae lectus sagittis velit consectetur laoreet. Morbi a interdum tortor, sit amet sagittis tellus. Vestibulum posuere, nunc placerat sollicitudin suscipit, tortor augue sagittis libero, eget dignissim urna est ut neque. Etiam porttitor ultricies tincidunt. Pellentesque ex risus, porta sit amet sapien non, cursus dignissim est. In at sem lectus. Proin a vehicula arcu. Phasellus posuere tortor et est maximus, sed ultricies libero eleifend. Integer scelerisque purus id neque semper interdum. Aenean ac volutpat est, quis imperdiet metus. Sed blandit neque quis leo porta aliquet.
<br/><br/>
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc dictum dolor in justo accumsan fringilla interdum et sem. Suspendisse potenti. Etiam in malesuada sem. Nam iaculis orci a lobortis convallis. Etiam quis varius mauris. Pellentesque sit amet nibh tempus, dictum tortor nec, tristique elit. In facilisis nunc at enim eleifend feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus dapibus ante vitae diam gravida, vitae porttitor nisi euismod. Donec pharetra libero sem, quis finibus felis tempor quis. Nam placerat tempor est at tincidunt. Mauris vitae ante purus. Cras blandit venenatis ornare. Nam porttitor fermentum orci, a ornare nibh rhoncus ut. Quisque nec cursus arcu.
<br/><br/>
Donec lacinia sollicitudin nisi, a euismod odio. Praesent pretium dui ut vulputate posuere. Mauris ac viverra ipsum. Cras fringilla efficitur arcu, et semper quam placerat id. Praesent metus mi, vestibulum quis massa sed, porttitor vehicula magna. Mauris sagittis mi tortor, ut dictum enim maximus at. Aliquam erat volutpat. Ut sodales semper enim, at tempor est placerat quis. Etiam a varius erat, ac sollicitudin lacus. Integer sit amet arcu id arcu volutpat efficitur.
<br/><br/>
Mauris at sapien vel magna gravida maximus eget id dui. Nam in sapien tellus. Vivamus laoreet massa diam, lacinia congue sapien commodo in. In malesuada suscipit felis, eu pellentesque magna aliquet vitae. Integer velit ipsum, sollicitudin et dictum quis, volutpat eu leo. Sed hendrerit felis ut turpis suscipit vestibulum. Nunc nec sapien at est vehicula cursus sed sit amet justo. Phasellus turpis ligula, laoreet et semper id, molestie sit amet arcu. Duis odio quam, luctus nec nibh sed, eleifend tristique nisl. Proin odio libero, pulvinar vel pharetra id, dapibus ac elit. Donec mollis accumsan nibh et condimentum.
<br/><br/>
Nunc convallis ipsum enim, vel volutpat est tempor finibus. Phasellus quis dapibus arcu. Integer non pulvinar eros. Aenean vitae leo quis ligula consequat ullamcorper. Nullam posuere augue nec turpis congue, a convallis lectus luctus. Etiam vel scelerisque diam. Donec commodo ante eget efficitur condimentum. Donec eu mi scelerisque, pretium odio dictum, sollicitudin ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
<br/><br/>
Aliquam vitae dignissim odio, sed malesuada sapien. Sed vel enim nisl. Vestibulum fringilla ante eget quam bibendum, placerat suscipit diam interdum. Duis risus augue, cursus nec hendrerit et, condimentum a risus. Sed eget sodales mauris. Mauris et neque ante. Vestibulum euismod turpis nec blandit commodo. Aliquam placerat euismod neque quis porttitor. Curabitur quis urna lobortis, vestibulum libero vel, placerat sem. Aenean ut massa vel augue pulvinar euismod. Nam tincidunt diam turpis, vitae dapibus nulla varius at. Pellentesque lobortis leo eu erat suscipit, vel euismod est iaculis. Nunc egestas feugiat ipsum, quis convallis nisl consectetur vel. Duis ullamcorper, sem sit amet faucibus rhoncus, lacus massa egestas mauris, sit amet fermentum massa sem in nunc.
`;

const body = document.querySelector("body");
body.append(text);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

const calculateAverageScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

//Streams
const scroll$ = fromEvent(document, "scroll");
// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(map(calculateAverageScroll), tap(console.log));

progress$.subscribe((percentage) => {
  progressBar.style.width = `${percentage}%`;
});
