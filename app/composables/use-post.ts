export default function () {
  const error = ref(false)

  async function createPost(values: Record<string, unknown>) {
    const { error: requestError } = await useFetch('/api/post', {
      method: 'POST',
      body: values,
    })

    if (requestError.value) {
      error.value = true
    }
  }

  async function updatePost(slug: string, values: Record<string, unknown>) {
    const { error: requestError } = await useFetch(`/api/post/${slug}`, {
      method: 'PATCH',
      body: values,
    })

    if (requestError.value) {
      error.value = true
    }
  }

  return {
    error,
    createPost,
    updatePost,
  }
}
