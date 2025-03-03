---
title: Challenges & Solutions
---

# Challenges & Solutions

## ❌ Challenge 1: API Rate Limits
🔹 **Problem:** Too many API calls can lead to rate limits.  
✔ **Solution:** Implemented **caching** to store previously fetched data.

## ❌ Challenge 2: Filtering Data Efficiently
🔹 **Problem:** The search bar needs to filter cryptocurrencies in real time.  
✔ **Solution:** Used the `.filter()` method on the API response to dynamically update results.

## ❌ Challenge 3: Handling Loading States
🔹 **Problem:** Users need feedback while data is loading.  
✔ **Solution:** Added a **Skeletion Divs** before displaying the fetched data.

## ❌ Challenge 3: Notification Response  
🔹 **Problem:** Users need Notification when  prices are updated as they may remain same and user may find app application non-functioning   
✔ **Solution:** Added a **Push Notification** after  fresh fetch call is made .

---
