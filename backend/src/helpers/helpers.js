const getPagination = (query) => {
    const hasPagination = query.page !== undefined || query.limit !== undefined;

    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 8;
    const offset = (page - 1) * limit;

    return { hasPagination, page, limit, offset };
};

export {
    getPagination
} 