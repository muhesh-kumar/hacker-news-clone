// TODO: handle all forms of urls like www. or web. etc.,
export default (url: string) => {
  return url.replace('http://', '').replace('https://', '').split(/[/?#]/)[0];
};
