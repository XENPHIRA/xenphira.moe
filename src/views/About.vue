<template>
  <div class="about">
    <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"> 
    <h1 style="font-family: 'Homemade Apple', cursive;">Xenphira</h1>
    <h2 style="font-family: 'Permanent Marker', cursive;">She/Her/Hers</h2>
    <p style="text-align: left;">
      Xenphira Hollyvine is a {{ age }} year old furry fandom member, 
      musician, technology enthusiast, and, very rarely, artist. 
      Xenphira also goes by the shortened form of her name, Xen. 
    </p>

    <h2 style="text-align: left;">Social Media and Contact Info</h2>
    <span style="text-align: left;" id="social-links">

      <div class="row">
        <div class="col-md-3">
          <span style="font-weight: bold">Twitter</span>
        </div>
        <div class="col">
          <a href="https://twitter.com/xenphira" target="_blank">@xenphira</a>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-3">
          <span style="font-weight: bold">FurAffinity</span>
        </div>
        <div class="col">
          <a href="https://www.furaffinity.net/user/xenphira" target="_blank">/user/xenphira</a>
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <span style="font-weight: bold">Telegram</span>
        </div>
        <div class="col">
          <a href="https://t.me/XenphiraChatProxy_Bot" target="_blank">@XenphiraChatProxy_Bot</a>
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <span style="font-weight: bold">Email</span>
        </div>
        <div class="col">
          <a :href="'mailto:'+electronicmail_addr">{{ electronicmail_addr }}</a>
        </div>
      </div>

    </span>
  </div>
</template>

<style>
  #social-links a {
    color: #fff;
  }
</style>

<script>
export default {
  data(){
    return {
      age: (function() {
        var today = new Date();
        var bday = new Date("May 04, 1997 00:00:00");
        var diff =(today.getTime() - bday.getTime()) / 1000;
        diff /= (60 * 60 * 24);
        return Math.abs(Math.round(diff/365.25));
      })(),
      electronicmail_addr: (function() {
        var x = "==DMi1zYuWKnbOaoyuaYfyJLgORqwSTqh92L";
        x = x.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
        x = x.split("").reverse().join("");
        return atob(x);
      })()
    }
  }
}
</script>