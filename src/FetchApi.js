import axios from 'axios';
import React from 'react';

async function fetchPosts() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return data;
}

export default fetchPosts;