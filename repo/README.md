#  NsBm0d 
A Cydia repository template. This template contains sample on how you can easily make depiction pages without replicating your html pages. The pages are styled using [Bootsrap](http://getbootstrap.com/) which is really easy to use. You can see how it looks like by visiting [this sample repo]https://github.com/Nrepo/Nrepo.github.io on your desktop or mobile phone.

Most data for this repo is stored on XML files and are loaded on the depiction page dynamically. See the guide below on how to set it up. Note that this guide doesn't cover creating .deb files but will briefly cover assiging depictions.

## How to install this template

### 1. Download
The latest release will always be [here]https://github.com/Nrepo/Nrepo.github.io/archive/master.zip.

### 2. Extract
Extract the contents into a subfolder on your website. If you're using [Github Pages](https://pages.github.com/), it should be under `username.github.io`.

#### 3. Personalize
Edit `Release` file. Modify the items pointed by `<--`

    Origin:  NsBm0d   <--
    Label:  NsBm0d    <--
    Suite: stable
    Version: 1.0
    Codename: ios
    Architectures: iphoneos-arm
    Components: main
    Description:  NsBm0d  - a cydia repo template  <--

#### 4. Your repo is ready.
At this point your repo is basically ready to be added into Cydia. You can also visit your repo's homepage by going to `https://username.github.io/repo/`. It will come with 2 sample packages, Nicon Package and NsB Package. Each of the packages have a link on this page pointing to their depictions. Next guide will show you how to assign and customize your depiction pages.


## Depiction pages for your packages

#### 1. A basic depiction page
Let's start with a simple one. First, of course, add your `.deb` files into the `debs` folder. Then, inside the `depictions` folder, duplicate the folder `com.Nrepo.Nicon`. You will see 2 xml files -- `info.xml` and `changelog.xml`. Edit the 2 files and put in the information regarding you package. The tags are pretty much self-explanatory.

`info.xml`.
```xml
<package>
	<id>com.Nrepo.Nicon</id>
	<name>Nicon</name>
	<version>1.0.4</version>
	<compatibility>
		<firmware>
      <miniOS>7.0</miniOS>
      <maxiOS>9.0+</maxiOS>
			<otherVersions>unsupported</otherVersions>
			<!--
			for otherVersions, you can put either unsupported or unconfirmed
			-->
		</firmware>
	</compatibility>
	<dependencies></dependencies>
	<descriptionlist>
		<description>This adds icons to the Sections.</description>
	</descriptionlist>
	<screenshots></screenshots>
	<changelog>
		<change>Initial release</change>
	</changelog>
	<links></links>
</package>
```
Edit `changelog.xml`.
```xml
<changelog>
	<changes>
		<version>1.0.0-1</version>
		<change>Initial release</change>
	</changes>
</changelog>
```

#### 2. Edit the depiction footer data
This data are the links that appear at the bottom of every depication. The data is stored in `repo.xml` at the root folder of your repo.

```xml
<repo>
	<footerlinks>
		<link>
			<name>I want this depiction template</name>
			<url>https://github.com/Nrepo/Nrepo.github.io</url>
			<iconclass>glyphicon glyphicon-thumbs-up</iconclass>
		</link>
	</footerlinks>
</repo>
```

#### 3. Link the depiction page to your Packages file.
Your depiction like should look like this:
```text
Depiction: https://username.github.io/repo/depictions/?p=[idhere]
```
Replace `[idhere]` with your actual package id.
```text
Depiction:
https://username.github.io/depictions/?p=com.Nrepo.Nicon
```
#### 4. Almost there
Compress your Packages file to bzip2 and there you have it! In case you haven't done yet, add your repo `https://username.github.io` to cydia.
  One final touch is to update `index.html`. Look at line 18 and 19. Change line 18 into your own **brand**, line 19 to have your own URL, and line 20 will have your YouTube video link.
YouTube Channel section Line 30 to have your YouTube Channel name, line 33 a brief description about your channel, and line 34 to have your YouTube Channel link.
Your packages section Lines 42-60 contains the list of packages you will need to edit those too. To add more packages just duplicate the previous package the add it under the last package then edit it as needed.
```html
16 <div class="container">
17 	<div class="well">
18 		<p><span class="text-primary"><b> NsBm0d </span></b> is a Cydia repository template.</p>
19 		<a class="btn btn-sm btn-default" href="cydia://url/cydia://url/https://cydia.saurik.com/api/share#?source=https://Nrepo.github.io//">Add to Cydia</a>
20    <a class="btn btn-sm btn-default" href="https://youtu.be/4goGcf1cVrQ">How to Add to Cydia</a>
21 	</div>
22 </div>

# YouTube Channel section
28 <div class="container">
29	<div class="panel panel-default">
30	  <div class="panel-heading"> NsBm0d </div>
31	  <div class="panel-body">
32		This is my YouTube Channel.
33		It also as other things that do not reference to Cydia.<br /><br />
34		<a class="btn btn-xs btn-default" href="https://www.youtube.com/user/NsBm0d">More info</a>
35	  </div>
36	</div>

# Your packages section
42 <div class="container">
43	<div class="panel panel-default">
44	  <div class="panel-heading">Nicon</div>
45	  <div class="panel-body">
46		This is a package with minimal information.
47		It also is an icon package.<br /><br />
48		<a class="btn btn-xs btn-default" href="depictions/?p=com.Nrepo.Nicon">More info</a>
49	  </div>
50	</div>
51
52	<div class="panel panel-default">
53	  <div class="panel-heading">NsB</div>
54	  <div class="panel-body">
55		This is a Theme that is used with Anemone.<br /><br />
56		<a class="btn btn-xs btn-default" href="depictions/?p=com.Nrepo.NsB">More info</a>
57	  </div>
58	</div>
59 </div>
60
```
#### 5. ALL DONE!
**And there you have it! Your first package on your repo!**

## What Next?
If you want to put more information on your depictions, see the other sample in `\depictions\com.Nrepo.NsB\`. This sample contains all the information that is supported.

Also, this guide is mostly a work in progress. I'll add up more details soon -- screenshots, more samples, repo icon, etc.
